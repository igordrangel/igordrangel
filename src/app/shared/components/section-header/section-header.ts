import { Reveal } from '@/shared/directives/reveal';
import { Component, computed, input } from '@angular/core';

type MotionDelay = '1' | '2' | '3' | '4' | '5';

@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.html',
  imports: [Reveal],
})
export class SectionHeader {
  readonly title = input.required<string>();
  readonly description = input<string>();
  readonly titleDelay = input<MotionDelay>('1');
  readonly descriptionDelay = input<MotionDelay>('2');

  readonly titleClass = computed(() => `section-title motion-delay-${this.titleDelay()}`);

  readonly descriptionClass = computed(
    () => `section-lead motion-delay-${this.descriptionDelay()}`,
  );
}
