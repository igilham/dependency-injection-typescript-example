import { Gadget } from "./Gadget";

export class Widget {
    #gadget: Gadget;

    // All dependencies are passed in so they can be easily replaced/mocked as needed
    // This places a burden on the code that creates the objects, as it needs to know how to wire up all the dependencies.
    constructor (gadget: Gadget) {
        this.#gadget = gadget;
    }

    get gadget (): Gadget {
        return this.#gadget;
    }
}
