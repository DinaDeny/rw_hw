import { JokeType } from './joke-type';

export interface IJoke {
    type: JokeType;
    setup: string;
    punchline: string;
    id: number;
}
