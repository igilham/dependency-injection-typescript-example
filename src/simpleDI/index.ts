import { getWidget } from './ioc';
import { Widget } from './Widget';

function handler () {
    const widget: Widget = getWidget();

    console.log(`Hello ${widget.gadget.name}`);
}

handler();
