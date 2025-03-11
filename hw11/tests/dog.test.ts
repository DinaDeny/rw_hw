import { jest, expect } from '@jest/globals';
import { Dog, interactWithAliveAnimal } from '../tasks/index';

describe('Dog methods', () => {
    let dog: Dog;
    const dogName = 'Buddy';
    const dogEnergy = 50;
    const dogBreed = 'Labrador';

    const dogBarkPhraseParam = 'Hello';

    const energyEatParam = 10;

    const reducedEnergyValue = 0.1;

    describe('interact with dog functions tests', () => {
        beforeEach(() => {
            dog = new Dog(dogName, dogEnergy, dogBreed);
        });

        it('should call all dog object methods', () => {
            const sleepMock = jest.spyOn(dog, 'sleep');
            const playMock = jest.spyOn(dog, 'play');
            const getEnergyMock = jest.spyOn(dog, 'getEnergy');
            const greetingMock = jest.spyOn(dog, 'greeting');

            interactWithAliveAnimal(dog);

            expect(sleepMock).toHaveBeenCalledTimes(1);
            expect(playMock).toHaveBeenCalledTimes(1);
            expect(getEnergyMock).toHaveBeenCalledTimes(1);
            expect(greetingMock).toHaveBeenCalledTimes(1);

            sleepMock.mockRestore();
            playMock.mockRestore();
            getEnergyMock.mockRestore();
            greetingMock.mockRestore();
        });

        it('should ensure that dog greeting is called with correct message', () => {
            const greetingSpy = jest.spyOn(dog, 'greeting');

            const greetingMessage = dog.greeting();

            expect(greetingSpy).toHaveBeenCalledTimes(1);

            expect(greetingMessage).toBe(`${dogName} barks: Woof Woof!`);

            greetingSpy.mockRestore();
        });

        it('should call dog bark method with correct phrase and return expected value', () => {
            const barkMock = jest.spyOn(dog, 'bark').mockImplementation((phrase) => `${phrase} Woof Woof!`);

            const result = dog.bark(dogBarkPhraseParam);

            expect(barkMock).toHaveBeenCalledWith(dogBarkPhraseParam);
            expect(result).toBe(`${dogBarkPhraseParam} Woof Woof!`);

            barkMock.mockRestore();
        });

        it('should reduce dog energy when barking', () => {
            const initialEnergy = dog.getEnergy();
            const barkMock = jest.spyOn(dog, 'bark').mockImplementation((phrase) => {
                dog.reduceEnergy(reducedEnergyValue);
                return `${phrase} Woof Woof!`;
            });

            dog.bark(dogBarkPhraseParam);

            expect(dog.getEnergy()).toBeLessThan(initialEnergy);
            expect(dog.getEnergy()).toBe(initialEnergy - reducedEnergyValue);

            barkMock.mockRestore();
        });

        it('should call dog eat method and increase dog energy', () => {
            const initialEnergy = dog.getEnergy();
            const eatMock = jest.spyOn(dog, 'eat');

            dog.eat(energyEatParam);

            expect(eatMock).toHaveBeenCalledWith(energyEatParam);

            expect(dog.getEnergy()).toBeGreaterThan(initialEnergy);

            eatMock.mockRestore();
        });
    });
});
