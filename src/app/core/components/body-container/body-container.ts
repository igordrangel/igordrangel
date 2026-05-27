import { Button } from '@/shared/components/button';
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-body-container',
  templateUrl: './body-container.html',
  imports: [Button],
})
export class BodyContainer {
  private readonly scrollPosition = signal(0);

  readonly showScrollToTop = computed(() => this.scrollPosition() > 150);

  constructor() {
    window.addEventListener('scroll', () => {
      this.scrollPosition.set(window.scrollY);
    });
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
