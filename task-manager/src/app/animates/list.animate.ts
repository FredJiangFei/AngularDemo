import { trigger, state, transition, style, animate, query } from '@angular/animations';

export const listAnim = trigger('listAnim', [
    transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),
        query(':enter', animate('2s', style({ opacity: 1 })), { optional: true }),

        query(':leave', style({ opacity: 1 }), { optional: true }),
        query(':leave', animate('2s', style({ opacity: 0 })), { optional: true }),
    ])
]);

export const itemAnim = trigger('itemAnim', [
    transition(':enter', [
        style({ opacity: 0 }),
        animate('1s', style({ opacity: 1 }))
    ]),
    transition(':leave', [
        style({ opacity: 1 }),
        animate('1s', style({ opacity: 0 }))
    ])
]);