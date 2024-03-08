import {
  animate,
  AnimationMetadata,
  sequence,
  style,
} from '@angular/animations';

export const scaleDeleteAnimation = (): AnimationMetadata => {
  return sequence([
    animate(
      `200ms cubic-bezier(0.3, 0, 0.8, 0.15)`,
      style({
        transform: `scale(0)`,
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
