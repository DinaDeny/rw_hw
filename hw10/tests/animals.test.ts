import { expect } from 'chai';
import {expect as jestExpect} from '@jest/globals';
import { Dog, Cat, PlushBear } from '../tasks/index';


describe('Animal Classes Tests', () => {

    describe('Dog Class Tests', () => {
        let dog: Dog;

        beforeEach(() => {
            dog = new Dog('Buddy', 50, 'Labrador');
        });

        it('should create a dog instance with correct properties', () => {
            expect(dog.name).to.equal('Buddy');
            expect(dog.getEnergy()).to.equal(50);
            expect(dog.breed).to.equal('Labrador');
        });

        it('should bark and reduce energy', () => {
            const initialEnergy = dog.getEnergy();
            dog.bark();
            jestExpect(dog.getEnergy()).toBeLessThan(initialEnergy);
        });

        it('should eat and increase energy', () => {
            const initialEnergy = dog.getEnergy();
            dog.eat(10);
            expect(dog.getEnergy()).to.be.greaterThan(initialEnergy);
        });

        it('should play and reduce energy', () => {
            dog.play();
            jestExpect(dog.getEnergy()).toBe(47);
        });

        it('should return correct greeting', () => {
            expect(dog.greeting()).to.equal('Buddy barks: Woof Woof!');
        });
    });

    describe('Cat Class Tests', () => {
        let cat: Cat;

        beforeEach(() => {
            cat = new Cat('Whiskers', 40, false);
        });

        it('should create a cat instance with correct properties', () => {
            expect(cat.name).to.equal('Whiskers');
            expect(cat.getEnergy()).to.equal(40);
            expect(cat.declawed).to.be.false;
        });

        it('should meow and reduce energy', () => {
            const initialEnergy = cat.getEnergy();
            cat.meow();
            jestExpect(cat.getEnergy()).toBeLessThan(initialEnergy);
        });

        it('should sleep and restore energy', () => {
            const initialEnergy = cat.getEnergy();
            cat.sleep();
            expect(cat.getEnergy()).to.be.greaterThan(initialEnergy);
        });

        it('should return correct greeting', () => {
            jestExpect(cat.greeting()).toBe('Whiskers meows: Meow!');
        });
    });

    describe('PlushBear Class Tests', () => {
        let plushBear: PlushBear;

        beforeEach(() => {
            plushBear = new PlushBear('Teddy', '11/07/2024');
        });

        it('should create a plush bear instance with correct properties', () => {
            jestExpect(plushBear.name).toBe('Teddy');
            jestExpect(plushBear.purchaseDate).toBe('11/07/2024');
        });

        it('should return correct greeting', () => {
            expect(plushBear.greeting()).to.equal('Teddy is happy to see you! You bought it on 11/07/2024');
        });
    });

});
