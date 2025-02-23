import { BaseAnimal} from "./types/BaseAnimal";

class Animal extends BaseAnimal {
    public constructor(name: string, energy: number) {
        super(name, energy);
    }

    public eat(amount: number): void {
        console.log(`${this.name} is eating.`);
        this.setEnergy(amount);
    }

    public sleep(): void {
        console.log(`${this.name} is sleeping.`);
        this.setEnergy(5);
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

    public bark(): void {
        console.log('Woof Woof!');
        this.reduceEnergy(0.1);
    }

   
    public eat(amount: number): void {
        console.log(`${this.name} is munching.`);
        this.setEnergy(amount * 1.2); 
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
        this.setEnergy(8); 
    }

    public greeting(): string {
        return `${this.name} meows: Meow!`;
    }
}


function interactWithAnimal(animal: BaseAnimal) {
    animal.eat(10);
    animal.sleep();
    animal.play();
    animal.getEnergy();
    animal.greeting();
    console.log(animal);
}

const dog = new Dog('Buddy', 50, 'Labrador');
const cat = new Cat('Whiskers', 40, false);

interactWithAnimal(dog);
interactWithAnimal(cat);