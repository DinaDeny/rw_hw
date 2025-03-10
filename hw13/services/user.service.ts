import axios, { AxiosPromise } from 'axios';
import { UserDto } from 'models/user.dto';

export class UserService {
    public constructor(private url: string) {}

    public getUserByUsername = (username: string): AxiosPromise => {
        return axios.request({
            baseURL: this.url,
            headers: { Accept: 'application/json' },
            method: 'GET',
            url: `/v2/user/${username}`
        });
    };

    public createUser = (user: UserDto): AxiosPromise => {
        return axios.request({
            baseURL: this.url,
            headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
            method: 'POST',
            url: '/v2/user',
            data: user
        });
    };
}
