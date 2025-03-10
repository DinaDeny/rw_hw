import { expect } from '@jest/globals';
import * as path from 'path';
import { MatchersV3, Verifier, PactV4, SpecificationVersion } from '@pact-foundation/pact';
import { UserService } from '../services/user.service';
import { CreateUserResponseDto, UserDto } from 'models/user.dto';
const { like } = MatchersV3;

describe('PactV4 PetsStore tests: Consumer', () => {
    let userService: UserService;

    const provider = new PactV4({
        consumer: 'User-Web-v4',
        provider: 'User-API-v4',
        spec: SpecificationVersion.SPECIFICATION_VERSION_V4
    });

    const userExample: UserDto = {
        id: 54,
        username: 'din_den',
        firstName: 'Din',
        lastName: 'Deny',
        email: 'dd@gmail.com',
        password: '12345678',
        phone: '380999999999',
        userStatus: 1
    };

    const createUserResponseBody: CreateUserResponseDto = {
        code: 200,
        type: 'unknown',
        message: '08755346'
    };

    const EXPECTED_BODY = like(userExample);

    const EXPECTED_CREATE_USER_RESPONSE_BODY = like(createUserResponseBody);

    describe('Create user', () => {
        it('Creates the user', () => {
            // Arrange
            return provider
                .addInteraction()
                .given('User interaction')
                .uponReceiving('Create a user')
                .withRequest('POST', '/v2/user', (builder) => {
                    builder.headers({ Accept: 'application/json', 'Content-Type': 'application/json' });
                    builder.jsonBody(userExample);
                })
                .willRespondWith(200, (builder) => {
                    builder.headers({ 'Content-Type': 'application/json' });
                    builder.jsonBody(EXPECTED_CREATE_USER_RESPONSE_BODY);
                })
                .executeTest(async (mockServer) => {
                    // Act
                    userService = new UserService(mockServer.url);
                    const responsePost = await userService.createUser(userExample);

                    // Assert
                    expect(responsePost.data).toEqual(createUserResponseBody);
                });
        });

        it('Returns the requested user', () => {
            // Arrange
            return provider
                .addInteraction()
                .uponReceiving('Get a user')
                .withRequest('GET', `/v2/user/${userExample.username}`, (builder) => {
                    builder.headers({ Accept: 'application/json' });
                })
                .willRespondWith(200, (builder) => {
                    builder.headers({ 'Content-Type': 'application/json' });
                    builder.jsonBody(EXPECTED_BODY);
                })
                .executeTest(async (mockServer) => {
                    // Act
                    userService = new UserService(mockServer.url);
                    const response = await userService.getUserByUsername(userExample.username);

                    // Assert
                    expect(response.data).toEqual(userExample);
                });
        });
    });
});

describe('User Pact Verification v4: Provider', () => {
    it('Validates the expectations of Matching Service', () => {
        return new Verifier({
            providerBaseUrl: 'https://petstore.swagger.io',
            pactUrls: [path.resolve(process.cwd(), './pacts/User-Web-v4-User-API-v4.json')]
        }).verifyProvider();
    });
});
