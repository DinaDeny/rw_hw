import { IEater } from './IEater';
import { IGreeting } from './IGreeting';
import { IPlayer } from './IPlayer';
import { ISleeper } from './ISleeper';


export abstract class BaseAnimal {
    public name: string;

    public constructor(name: string) {
        this.name = name;
    }
}


export abstract class PlushAnimal extends BaseAnimal  implements IGreeting {
    public abstract greeting(): string;
}


export abstract class AliveAnimal extends BaseAnimal implements IEater, ISleeper, IPlayer, IGreeting {
    private energy: number;

    public constructor(name: string, energy: number) {
        super(name)
        this.energy = energy;
    }

    public abstract eat(amount: number): void;

    public abstract sleep(): void;

    public abstract play(): void;

    public abstract greeting(): string;

    public getEnergy(): number {
        return this.energy;
    }

    public setEnergy(amount: number): void {
        this.energy = amount;
    }

    public reduceEnergy(amount: number): void {
        this.energy -= amount;
    }
}

