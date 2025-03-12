import axios, { AxiosInstance, AxiosResponse } from 'axios';
import dotenv from 'dotenv';
import { IJoke } from 'models/i-joke';
import { JokeType } from 'models/joke-type';

dotenv.config();

const API_BASE = process.env.API_BASE;

class JokeApiService {
    public client: AxiosInstance;

    public constructor() {
        this.client = axios.create({
            baseURL: API_BASE
        });
    }

    public getRandomJoke(): Promise<AxiosResponse<IJoke>> {
        return this.client.get('/jokes/random');
    }

    public getJokeById(id: number): Promise<AxiosResponse<IJoke>> {
        return this.client.get(`/jokes/${id}`);
    }

    public getRandomJokeByType(type: JokeType): Promise<AxiosResponse<IJoke[]>> {
        return this.client.get(`/jokes/${type}/random`);
    }

    public getTenJokes(): Promise<AxiosResponse<IJoke[]>> {
        return this.client.get('/jokes/ten');
    }
}

export default JokeApiService;
