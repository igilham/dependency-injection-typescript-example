import { Gadget } from "./Gadget";

export class Widget {
    #gadget: Gadget;

    constructor () {
        // How to test this with a mock Gadget?
        // Jest module mocking can do it, but is inflexible
        this.#gadget = new Gadget();
    }

    get gadget (): Gadget {
        return this.#gadget;
    }
}
