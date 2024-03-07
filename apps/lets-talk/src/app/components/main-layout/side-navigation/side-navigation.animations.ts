import {
  animateChild,
  group,
  query,
  sequence,
  stagger,
  transition,
  trigger,
} from '@angular/animations';
import {
  fadeFactory,
  slideInOutAnimationFactory,
  staggerFadeFactory,
} from '@lt/shared/angular/ui';

export const DRAWER_ANIMATIONS = [
  trigger('drawerInit', [
    transition(':enter', [
      sequence([
        ...slideInOutAnimationFactory('X', '-100%', '0'),
        group([query('@*', [stagger('400ms', [animateChild()])])]),
      ]),
    ]),
  ]),
  trigger('logoFade', [transition(':enter', fadeFactory(0, 1))]),
  trigger('itemStagger', [
    transition(':enter', [query('.item', staggerFadeFactory())]),
  ]),
];
