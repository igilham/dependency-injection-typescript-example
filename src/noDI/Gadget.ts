export class Gadget {
    #name: string;

    constructor () {
        this.#name = 'Dave';
    }

    get name (): string {
        return this.#name;
    }
}
