import {jest, expect } from '@jest/globals';
import { Dog, Cat, interactWithAliveAnimal, PlushBear, interactWithPlushAnimal, feedAliveAnimal } from '../tasks/index';

describe('Functions Tests', () => {

    describe('interactWithAliveAnimal Function Tests', () => {
        let dog: Dog;
        let cat: Cat;

        beforeEach(() => {
            dog = new Dog('Buddy', 50, 'Labrador');
            cat = new Cat('Whiskers', 40, false);
        });

        it('should call sleep, play, getEnergy and greeting methods on AliveAnimal', () => {
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

        it('should call methods correctly on Cat', () => {
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
    });

    describe('interactWithPlushAnimal Function Tests', () => {
        let plushBear: PlushBear;

        beforeEach(() => {
            plushBear = new PlushBear('Teddy', '11/07/2024');
        });

        it('should log name and greeting of PlushBear', () => {
            console.log = jest.fn();

            interactWithPlushAnimal(plushBear);

            expect(console.log).toHaveBeenCalledWith('Teddy');
            expect(console.log).toHaveBeenCalledWith('Teddy is happy to see you! You bought it on 11/07/2024');
        });
    });

    describe('feedAliveAnimal Function Tests', () => {
        let dog: Dog;
        let cat: Cat;

        beforeEach(() => {
            dog = new Dog('Buddy', 50, 'Labrador');
            cat = new Cat('Whiskers', 40, false);
        });

        it('should call eat method and change energy correctly for Dog', () => {
            const initialEnergy = dog.getEnergy();
            const eatMock = jest.spyOn(dog, 'eat');

            feedAliveAnimal(dog);

            expect(eatMock).toHaveBeenCalledWith(10);
            expect(dog.getEnergy()).toBeGreaterThan(initialEnergy);

            eatMock.mockRestore();
        });

        it('should call eat method and change energy correctly for Cat', () => {
            const initialEnergy = cat.getEnergy();
            const eatMock = jest.spyOn(cat, 'eat');

            feedAliveAnimal(cat);

            expect(eatMock).toHaveBeenCalledWith(10);
            expect(cat.getEnergy()).toBeGreaterThan(initialEnergy);

            eatMock.mockRestore();
        });
    });

});
