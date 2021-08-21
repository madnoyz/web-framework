export class Attributes<T> {
    constructor(private data: T) {}

    get = <K extends keyof T>(key: K): T[K] => {
        return this.data[key];
    }
    // set(update: {name?: string, age?: number}): void     // Use a interface/generics
    set(update: T): void {
        Object.assign(this.data, update);                   // copies over the data from update into this.data
    }

    getAll(): T {
        return this.data;
    }
}