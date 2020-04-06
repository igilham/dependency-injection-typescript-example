import { injectable } from "inversify";

@injectable()
export class Gadget {
    #name: string;

    constructor (name: string) {
        this.#name = name;
    }

    get name (): string {
        return this.#name;
    }
}
