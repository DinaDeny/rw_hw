import { jest, expect } from '@jest/globals';
import { Cat, interactWithAliveAnimal } from '../tasks/index';

describe('Cat methods', () => {
    let cat: Cat;

    const catName = 'Whiskers';
    const catEnergy = 40;
    const catIsDeclawed = false;

    const energyEatParam = 10;

    describe('interact with cat functions tests', () => {
        beforeEach(() => {
            cat = new Cat(catName, catEnergy, catIsDeclawed);
        });

        it('should call all cat object methods', () => {
            const sleepMock = jest.spyOn(cat, 'sleep');
            const playMock = jest.spyOn(cat, 'play');
            const getEnergyMock = jest.spyOn(cat, 'getEnergy');
            const greetingMock = jest.spyOn(cat, 'greeting');

            interactWithAliveAnimal(cat);

            expect(sleepMock).toHaveBeenCalledTimes(1);
            expect(playMock).toHaveBeenCalledTimes(1);
            expect(getEnergyMock).toHaveBeenCalledTimes(1);
            expect(greetingMock).toHaveBeenCalledTimes(1);

            sleepMock.mockRestore();
            playMock.mockRestore();
            getEnergyMock.mockRestore();
            greetingMock.mockRestore();
        });

        it('should ensure that cat greeting is called with correct message', () => {
            const catGreetingPhrase = 'Meow!';
            const greetingMock = jest.spyOn(cat, 'greeting').mockImplementation(() => catGreetingPhrase);

            const greetingMessage = cat.greeting();

            expect(greetingMock).toHaveBeenCalled();

            expect(greetingMessage).toBe(catGreetingPhrase);

            greetingMock.mockRestore();
        });

        it('should call cat eat method and increase cat energy', () => {
            const initialEnergy = cat.getEnergy();
            const eatMock = jest.spyOn(cat, 'eat');

            cat.eat(energyEatParam);

            expect(eatMock).toHaveBeenCalledWith(energyEatParam);

            expect(cat.getEnergy()).toBeGreaterThan(initialEnergy);

            eatMock.mockRestore();
        });
    });
});
