import { Widget } from './Widget';
import { Gadget } from './Gadget';

function handler () {
    const gadget: Gadget = new Gadget('Dave');
    const widget: Widget = new Widget(gadget);

    console.log(`Hello ${widget.gadget.name}`);
}

handler();
