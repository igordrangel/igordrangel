import { NgOptimizedImage } from '@angular/common';
import { booleanAttribute, Component, input, signal } from '@angular/core';
import { Skeleton } from '../skeleton';

@Component({
  selector: 'app-card',
  templateUrl: './card.html',
  imports: [NgOptimizedImage, Skeleton],
})
export class Card {
  readonly thumbnail = input.required<string>();
  readonly label = input.required<string>();
  readonly description = input.required<string>();
  readonly compact = input(false, { transform: booleanAttribute });

  readonly thumbnailIsLoading = signal(true);
}
