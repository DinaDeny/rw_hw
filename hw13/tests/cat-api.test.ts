import axios, { AxiosError } from 'axios';
import { expect } from '@jest/globals';
import dotenv from 'dotenv';
import { FavouriteCat } from 'models/cats.dto';
import { ErrorResponse } from 'models/error-response';

dotenv.config();

const API_BASE = process.env.CAT_API_BASE;
const API_KEY = process.env.CAT_API_KEY;

const api = axios.create({
    baseURL: API_BASE,
    headers: {
        'x-api-key': API_KEY,
        'Content-Type': 'application/json'
    }
});

describe('The Cat API Integration Tests', () => {
    let imageId = '';
    let voteId = '';
    let favouriteId = '';

    it('Fetch a random cat image', async () => {
        const response = await api.get('/images/search?limit=10');

        expect(response.status).toBe(200);
        expect(response.data).toBeInstanceOf(Array);
        expect(response.data.length).toBeGreaterThan(0);

        imageId = response.data[0].id;
        expect(imageId).toBeDefined();
    });

    it('Vote for the cat image', async () => {
        const requestBody = { image_id: imageId, value: 1 };
        const response = await api.post('/votes', requestBody);

        expect(response.status).toBe(201);
        expect(response.data.message).toBe('SUCCESS');

        voteId = response.data.id;
        expect(voteId).toBeDefined();
    });

    it('Add the cat image to favourites', async () => {
        const requestBody = { image_id: imageId };
        const response = await api.post('/favourites', requestBody);

        expect(response.status).toBe(200);
        expect(response.data.message).toBe('SUCCESS');

        favouriteId = response.data.id;
        expect(favouriteId).toBeDefined();
    });

    it('Get favourites and check image', async () => {
        const notExistingImageId = 'notExistingImageId';

        const response = await api.get('/favourites');

        expect(response.status).toBe(200);

        const favouriteCat = response.data.find((cat: FavouriteCat) => cat.image_id === imageId);

        expect(favouriteCat).toBeDefined();

        if (favouriteCat) {
            expect(favouriteCat.image_id).toBe(imageId);
        }

        try {
            await api.get(`/images/${notExistingImageId}`);
        } catch (error) {
            const axiosError = error as AxiosError<ErrorResponse>;

            if (axiosError.response) {
                expect(axiosError.response.status).toBe(400);
            } else {
                throw new Error('No response from server');
            }
        }

        const imageResponse = await api.get(`/images/${imageId}`);

        expect(imageResponse.status).toBe(200);
        expect(imageResponse.data.id).toBe(imageId);
        expect(imageResponse.data.url).toBeDefined();
    });

    it('Delete favourite item', async () => {
        const response = await api.delete(`/favourites/${favouriteId}`);

        expect(response.status).toBe(200);
        expect(response.data.message).toBe('SUCCESS');
    });

    it('Remove the vote', async () => {
        const response = await api.delete(`/votes/${voteId}`);

        expect(response.status).toBe(200);
        expect(response.data.message).toBe('SUCCESS');
    });
});
