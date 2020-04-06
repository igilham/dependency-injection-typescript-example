export class Gadget {
    #name?: string;

    get name (): string | undefined {
        return this.#name;
    }

    set name (s: string | undefined) {
        this.#name = s;
    }
}
