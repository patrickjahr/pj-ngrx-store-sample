import {
  animate,
  AnimationMetadata,
  stagger,
  style,
} from '@angular/animations';

export const fadeFactory = (
  from: number,
  to: number,
  duration = '200ms'
): AnimationMetadata[] => {
  return [
    style({ opacity: from }),
    animate(`${duration} ease`, style({ opacity: to })),
  ];
};

export const staggerFadeFactory = (
  staggerDuration = '80ms'
): AnimationMetadata[] => {
  return [
    style({ opacity: 0 }),
    stagger(staggerDuration, [animate(`350ms  ease`, style({ opacity: 1 }))]),
  ];
};
