abstract class BaseAnimal {
    public name: string;
    public energy: number;

    public constructor(name: string,  energy: number) {
        this.name = name;
        this.energy = energy;
    }

    public abstract eat(amount: number):void;

    public abstract sleep():void;

    public abstract play():void;

}

class Animal extends BaseAnimal {
    public constructor(name: string,  energy: number) {
        super(name, energy);
    }

    public eat(amount: number):void {
        console.log(`${this.name} is eating.`);
        this.energy += amount;
    }

    public sleep():void {
        console.log(`${this.name} is sleeping.`);
        this.energy += 5;
    }

    public play():void {
        console.log(`${this.name} is playing.`);
        this.energy -= 2;
    }
}


export class Dog extends Animal {

    public breed: string;

    public constructor(name:string, energy:number, breed:string) {
        super(name, energy);

        this.breed = breed;
    }

    public bark():void {
        console.log('Woof Woof!');
        this.energy -= .1;
    }
}

export class Cat extends Animal {

    public declawed: boolean;

    public  constructor(name:string, energy:number, declawed:boolean) {
        super(name, energy);

        this.declawed = declawed;
    }

    public  meow(): void {
        console.log('Meow!');
        this.energy -= .1;
    }
}

