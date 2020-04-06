import { Container } from 'inversify';

import { Widget } from "./Widget";
import { Gadget } from "./Gadget";

const container = new Container();

// Setting up objects with dependencies is easy.
container.bind<Widget>(Widget).toSelf();

// Injecting constants is a bit annoying. We can defer to a factory or factory function
// if needed, but it only seems to add complexity.
container.bind<Gadget>(Gadget).toConstantValue(new Gadget('Dave'));

export default container;
