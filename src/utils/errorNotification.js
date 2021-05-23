import { error, info } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

export const errorNotification = message =>
    error({
        title: 'Oops...!',
        text: message,
        delay: 3000,
    });

export const infoNotification = message =>
    info({
        text: message,
        delay: 3000,
    });