import { LoadingImage } from '@/shared/components/loading-image';
import { booleanAttribute, Component, input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.html',
  imports: [LoadingImage],
})
export class Card {
  readonly thumbnail = input.required<string>();
  readonly label = input.required<string>();
  readonly description = input.required<string>();
  readonly compact = input(false, { transform: booleanAttribute });
}
