import { AxiosError } from 'axios';
import JokeApiService from '../services/joke-api-service';
import { expect } from '@jest/globals';
import { IErrorResponse } from 'models/i-error-response';

const jokeApi = new JokeApiService();

const validJokeTypes = ['general', 'knock-knock', 'programming', 'dad'];

describe('Test Joke API', () => {
    it('GET /jokes/random should return status 200 and joke object', async () => {
        const response = await jokeApi.getRandomJoke();
        expect(response.status).toBe(200);

        expect(response.data).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                type: expect.any(String),
                setup: expect.any(String),
                punchline: expect.any(String)
            })
        );

        expect(validJokeTypes).toContain(response.data.type);
    });

    it('GET /jokes/:id should return status 200 with correct id', async () => {
        const jokeId = 1;
        const response = await jokeApi.getJokeById(jokeId);
        expect(response.status).toBe(200);

        expect(response.data.id).toBe(jokeId);

        expect(response.data).toEqual(
            expect.objectContaining({
                id: jokeId,
                type: expect.any(String),
                setup: expect.any(String),
                punchline: expect.any(String)
            })
        );

        expect(validJokeTypes).toContain(response.data.type);
    });

    it('GET /jokes/:type/random should return status 200 and correct joke type', async () => {
        const type = 'programming';
        const response = await jokeApi.getRandomJokeByType(type);
        expect(response.status).toBe(200);

        expect(Array.isArray(response.data)).toBe(true);
        expect(response.data.length).toBeGreaterThan(0);
        const joke = response.data[0];

        expect(joke.type).toBe(type);

        expect(joke).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                type: expect.any(String),
                setup: expect.any(String),
                punchline: expect.any(String)
            })
        );
    });

    it('GET /jokes/ten should return status 200 and array with 10 jokes', async () => {
        const response = await jokeApi.getTenJokes();
        expect(response.status).toBe(200);
        expect(Array.isArray(response.data)).toBe(true);

        expect(response.data.length).toBe(10);

        response.data.forEach((joke) => {
            expect(joke).toEqual(
                expect.objectContaining({
                    id: expect.any(Number),
                    type: expect.any(String),
                    setup: expect.any(String),
                    punchline: expect.any(String)
                })
            );

            expect(validJokeTypes).toContain(joke.type);
        });
    });

    it('GET /jokes/:id with invalid id should return 404 and error message', async () => {
        const invalidId = 99999;

        try {
            await jokeApi.getJokeById(invalidId);
        } catch (error) {
            const axiosError = error as AxiosError<IErrorResponse>;

            expect(axiosError.response?.status).toBe(404);
            expect(axiosError.response?.data.type).toBe('error');
            expect(axiosError.response?.data.message).toBe('joke not found');
        }
    });
});
