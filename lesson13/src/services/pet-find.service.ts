import axios, { AxiosPromise } from 'axios';

export class PetStoreService {
    public constructor(private url: string) {}

    public getPetsByStatus = (status: string): AxiosPromise => {
        return axios.request({
            baseURL: this.url,
            headers: { Accept: 'application/json' },
            method: 'GET',
            url: 'v2/pet/findByStatus',
            params: { status }
        });
    };
}
