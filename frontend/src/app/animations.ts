import {
  animate,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const blurAnimation = trigger('blurAnimation', [
  // Animação de entrada
  transition(':enter', [
    style({ opacity: 0, filter: 'blur(8px)', transform: 'scale(0.8)' }),
    animate(
      '0.1s ease-out',
      style({ opacity: 1, filter: 'blur(0px)', transform: 'scale(1)' })
    ),
  ]),
  // Animação de saída
  transition(':leave', [
    animate(
      '0.1s ease-in',
      style({ opacity: 0, filter: 'blur(8px)', transform: 'scale(0.8)' })
    ),
  ]),
]);

export const fadeInAnimation = trigger('fadeInAnimation', [
    // Animação de entrada
    transition(':enter', [
      style({ opacity: 0 }), // Estado inicial (invisível)
      animate('500ms ease-in', style({ opacity: 1 })), // Transição para visível
    ]),
    // Animação de saída
    transition(':leave', [
      style({ opacity: 0 }), // Estado inicial (invisível)
      animate('500ms ease-in', style({ opacity: 1 })), // Transição para visível
    ]),
  ]);
  