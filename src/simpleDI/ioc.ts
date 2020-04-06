import { Widget } from "./Widget";
import { Gadget } from "./Gadget";

// This file separates dependency setup from the main flow of execution. It's called an Inversion of Control container or Dependency Injection framework. This one is about as simple as it gets.

export function getWidget (): Widget {
    return new Widget(getGadget());
}

function getGadget (): Gadget {
    return new Gadget(getName());
}

function getName (): string {
    // We might read this from a configuration file in a production app.
    return 'Dave';
}
