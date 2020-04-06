// Required to enable reflection used by inversify.
import 'reflect-metadata';

import ioc from './ioc';
import { Widget } from './Widget';

function handler () {
    const widget: Widget = ioc.resolve<Widget>(Widget);

    console.log(`Hello ${widget.gadget.name}`);
}

handler();
