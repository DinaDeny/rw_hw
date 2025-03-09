import { jest, expect } from '@jest/globals';
import { Dog, Cat, interactWithAliveAnimal, PlushBear } from '../tasks/index';

describe('Functions Tests', () => {
    let dog: Dog;
    let cat: Cat;

    const dogName = 'Buddy';
    const dogEnergy = 50;
    const dogBreed = 'Labrador';

    const dogBarkPhraseParam = 'Hello';

    const catName = 'Whiskers';
    const catEnergy = 40;
    const catIsDeclawed = false;

    const energyEatParam = 10;

    const reducedEnergyValue = 0.1;

    describe('interact with alive animals functions tests', () => {
        beforeEach(() => {
            dog = new Dog(dogName, dogEnergy, dogBreed);
            cat = new Cat(catName, catEnergy, catIsDeclawed);
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

        it('should ensure that dog greeting is called with correct message', () => {
            const greetingSpy = jest.spyOn(dog, 'greeting');

            const greetingMessage = dog.greeting();

            expect(greetingSpy).toHaveBeenCalledTimes(1);

            expect(greetingMessage).toBe(`${dogName} barks: Woof Woof!`);

            greetingSpy.mockRestore();
        });

        it('should ensure that cat greeting is called with correct message', () => {
            const catGreetingPhrase = 'Meow!';
            const greetingMock = jest.spyOn(cat, 'greeting').mockImplementation(() => catGreetingPhrase);

            const greetingMessage = cat.greeting();

            expect(greetingMock).toHaveBeenCalled();

            expect(greetingMessage).toBe(catGreetingPhrase);

            greetingMock.mockRestore();
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
    });

    describe('interact with plush animal function tests', () => {
        let plushBear: PlushBear;

        const plushBearName = 'Teddy';
        const plushBearPurchaseDate = '11/07/2024';

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

    describe('feed alive animal function tests', () => {
        beforeEach(() => {
            dog = new Dog(dogName, dogEnergy, dogBreed);
            cat = new Cat(catName, catEnergy, catIsDeclawed);
        });

        it('should call dog eat method and increase dog energy', () => {
            const initialEnergy = dog.getEnergy();
            const eatMock = jest.spyOn(dog, 'eat');

            dog.eat(energyEatParam);

            expect(eatMock).toHaveBeenCalledWith(energyEatParam);

            expect(dog.getEnergy()).toBeGreaterThan(initialEnergy);

            eatMock.mockRestore();
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
