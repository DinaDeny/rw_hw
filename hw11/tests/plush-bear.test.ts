import { jest, expect } from '@jest/globals';
import { PlushBear } from '../tasks/index';

describe('Plush bear methods', () => {
    const plushBearName = 'Teddy';
    const plushBearPurchaseDate = '11/07/2024';

    describe('interact with plush animal function tests', () => {
        let plushBear: PlushBear;

        beforeEach(() => {
            plushBear = new PlushBear(plushBearName, plushBearPurchaseDate);
        });

        it('should log name and greeting of PlushBear', () => {
            const plushBearGreetingMessage = 'Happy to see you!';
            const greetingMock = jest.spyOn(plushBear, 'greeting').mockImplementation(() => {
                return plushBearGreetingMessage;
            });

            const result = plushBear.greeting();

            expect(greetingMock).toHaveBeenCalledTimes(1);
            expect(result).toBe(plushBearGreetingMessage);

            greetingMock.mockRestore();
        });
    });
});
