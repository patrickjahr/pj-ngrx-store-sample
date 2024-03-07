import { AnimationDirection } from './animation-direction.type';
import {
  animate,
  AnimationMetadata,
  sequence,
  stagger,
  style,
} from '@angular/animations';

export const slideInOutAnimationFactory = (
  direction: AnimationDirection,
  from: string,
  to: string,
  duration = '350ms',
  easing = 'cubic-bezier(0.25, 0.1, 0.25, 1)'
): AnimationMetadata[] => {
  return [
    style({
      transform: `translate${direction}(${from})`,
    }),
    animate(
      `${duration} ${easing}`,
      style({
        transform: `translate${direction}(${to})`,
      })
    ),
  ];
};

export const slideFadeAnimationFactory = (): AnimationMetadata[] => {
  return [
    style({ opacity: 0, transform: 'translateY(-1.5rem)', scale: 0.8 }),
    stagger('80ms', [
      animate(
        `350ms cubic-bezier(0.05, 0.7, 0.1, 1)`,
        style({ opacity: 1, transform: 'translateY(0)', scale: 1 })
      ),
    ]),
  ];
};

export const slideDeletAnimation = (): AnimationMetadata => {
  return sequence([
    animate(
      `200ms cubic-bezier(0.3, 0, 0.8, 0.15)`,
      style({
        transform: `translateX(-200%)`,
      })
    ),
    animate(
      `200ms ease`,
      style({
        height: 0,
      })
    ),
  ]);
};
