import { animate, AnimationMetadata, style } from '@angular/animations';

export const zoomInAnimation = (): AnimationMetadata[] => {
  return [
    style({ opacity: 0, scale: 0 }),
    animate(
      `500ms cubic-bezier(0.3, 0, 0.8, 0.15);`,
      style({ opacity: 1, scale: 1 })
    ),
  ];
};
