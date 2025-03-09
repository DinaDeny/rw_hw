import {  AliveAnimal, PlushAnimal} from './types/BaseAnimal';

class Animal extends AliveAnimal {
    public constructor(name: string, energy: number) {
        super(name, energy);
    }

    public eat(amount: number): void {
        console.log(`${this.name} is eating.`);
        this.increaseEnergy(amount);
    }

    public sleep(): void {
        console.log(`${this.name} is sleeping.`);
        this.increaseEnergy(5);
    }

    public play(): void {
        console.log(`${this.name} is playing.`);
        this.reduceEnergy(2);
    }

    public greeting(): string {
        return `${this.name} makes a noise.`;
    }
}


export class Dog extends Animal {
    public breed: string;

    public constructor(name: string, energy: number, breed: string) {
        super(name, energy);
        this.breed = breed;
    }

    public bark(phrase: string): string {
        this.reduceEnergy(0.1);
        return `${phrase} Woof Woof!`;
    }

    public eat(amount: number): void {
        console.log(`${this.name} is munching.`);
        this.increaseEnergy(amount * 1.2);
    }

    public play(): void {
        console.log(`${this.name} is fetching the ball.`);
        this.reduceEnergy(3);
    }

    public greeting(): string {
        return `${this.name} barks: Woof Woof!`;
    }
}


export class Cat extends Animal {
    public declawed: boolean;

    public constructor(name: string, energy: number, declawed: boolean) {
        super(name, energy);
        this.declawed = declawed;
    }

    public meow(): void {
        console.log('Meow!');
        this.reduceEnergy(0.1);
    }


    public sleep(): void {
        console.log(`${this.name} is purring and sleeping.`);
        this.increaseEnergy(8);
    }

    public greeting(): string {
        return `${this.name} meows: Meow!`;
    }
}

export class PlushBear extends PlushAnimal {
    public purchaseDate: string;

    public constructor(name : string, purchaseDate : string) {
        super(name);
        this.purchaseDate = purchaseDate;
    }

    public greeting(): string {
        return `${this.name} is happy to see you! You bought it on ${this.purchaseDate}`;
    }
}


export function interactWithAliveAnimal(animal: AliveAnimal):void {
    animal.sleep();
    animal.play();
    animal.getEnergy();
    animal.greeting();
    console.log(animal);
}

export function interactWithPlushAnimal(animal: PlushBear):void {
    console.log(animal.name);
    console.log(animal.greeting());
}

export function feedAliveAnimal(animal:AliveAnimal):void {
    animal.eat(10);
}

const dog = new Dog('Buddy', 50, 'Labrador');
const cat = new Cat('Whiskers', 40, false);
const plushBear = new PlushBear('Teddy', '11/07/2024');

interactWithAliveAnimal(dog);
interactWithAliveAnimal(cat);

feedAliveAnimal(dog);
feedAliveAnimal(cat);

interactWithPlushAnimal(plushBear);


