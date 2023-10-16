import { transition, trigger, style, animate, query } from '@angular/animations';

export const zoomIn = trigger('routeAnimations', [
  transition('* <=> *', [
    query(
      ':enter',
      [
        style({
          position: 'absolute',
          opacity: 0,
          width: '100%',
          transform: 'scale(0) translateY(100%)',
        }),
        animate('300ms ease', style({ opacity: 1, transform: 'scale(1) translateY(0)' })),
      ],
      { optional: true } // Allow for an empty query
    ),
    query(
      ':leave',
      [
        animate('300ms ease', style({ opacity: 0, transform: 'scale(0) translateY(100%)' })),
      ],
      { optional: true } // Allow for an empty query
    ),
  ]),
]);
