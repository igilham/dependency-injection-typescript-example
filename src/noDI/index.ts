import { Widget } from './Widget';

function handler () {
    const widget: Widget = new Widget();

    console.log(`Hello ${widget.gadget.name}`);
}

handler();
