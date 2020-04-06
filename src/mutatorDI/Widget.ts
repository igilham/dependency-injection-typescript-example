import { Gadget } from "./Gadget";

// Instances of this class can always be uninitialised so we always need to handle
// the posibility whenever we use it.
export class Widget {
    #gadget?: Gadget;

    get gadget (): Gadget | undefined {
        return this.#gadget;
    }

    set gadget (g: Gadget | undefined) {
        this.#gadget = g;
    }
}
