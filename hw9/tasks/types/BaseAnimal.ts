import {Eater} from './Eater';
import {Player} from './Player';
import {Sleeper} from './Sleeper';


export abstract class BaseAnimal implements Eater, Sleeper, Player {
    public name: string;
    private energy: number;

    public constructor(name: string, energy: number) {
        this.name = name;
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

