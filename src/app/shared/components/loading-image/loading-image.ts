import { NgOptimizedImage } from '@angular/common';
import { Skeleton, SkeletonVariant } from '@/shared/components/skeleton';
import { booleanAttribute, Component, computed, input, signal } from '@angular/core';
import type { ClassValue } from 'clsx';

type ImageFit = 'cover' | 'contain';
type FadeDuration = '300' | '500';

@Component({
  selector: 'app-loading-image',
  templateUrl: './loading-image.html',
  host: {
    class: 'relative',
    '[class.block]': 'fill()',
    '[class.size-full]': 'fill()',
  },
  imports: [NgOptimizedImage, Skeleton],
})
export class LoadingImage {
  readonly src = input.required<string>();
  readonly alt = input.required<string>();
  readonly fill = input(false, { transform: booleanAttribute });
  readonly width = input<number>();
  readonly height = input<number>();
  readonly priority = input(false, { transform: booleanAttribute });
  readonly fit = input<ImageFit>('cover');
  readonly skeletonVariant = input<SkeletonVariant>('rect');
  readonly skeletonClass = input<ClassValue>('absolute inset-0 h-full w-full');
  readonly imgClass = input<ClassValue>('');
  readonly fadeDuration = input<FadeDuration>('300');

  readonly isLoading = signal(true);

  readonly imageClass = computed(() => {
    const classes = [
      'transition-opacity',
      this.fadeDuration() === '500' ? 'duration-500 ease-out' : 'duration-300',
    ];

    if (this.isLoading()) {
      classes.push('opacity-0');
    }

    if (this.fill()) {
      classes.push(`object-${this.fit()}`);
    } else {
      classes.push('relative');
    }

    const custom = this.imgClass();
    if (custom) {
      classes.push(String(custom));
    }

    return classes.join(' ');
  });

  onLoad() {
    this.isLoading.set(false);
  }
}
