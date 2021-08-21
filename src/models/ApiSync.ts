import axios, { AxiosPromise } from "axios";  // AxiosPromise sends to class User to complete
// import { UserProps } from './User';  // changed to <T> generics

interface HasId { // created for save() id.
    id?: number;
}

export class ApiSync<T extends HasId> {        // class has a constraint. that has a identified type.
    constructor(public rootUrl: string) {}

    fetch(id: number): AxiosPromise {
        // Attempt request to json server
        return axios.get(`${this.rootUrl}/${id}`);
    }

    save(data: T): AxiosPromise {
        const { id } = data;  // const id = data.id

        if(id) {
            return axios.put(`${this.rootUrl}/${id}`, data);
        }
        else {
            return axios.post(this.rootUrl, data);
        }
    }
}