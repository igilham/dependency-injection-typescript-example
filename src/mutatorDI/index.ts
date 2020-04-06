import { Widget } from './Widget';
import { Gadget } from './Gadget';

function handler () {
    const gadget: Gadget = new Gadget();
    const widget: Widget = new Widget();

    // Danger! these objects are not valid and usable yet
    // console.log(`Hello ${widget.gadget.name}`); // no!

    gadget.name = 'Dave'
    widget.gadget = gadget;

    console.log(`Hello ${widget.gadget.name}`);
}

handler();
