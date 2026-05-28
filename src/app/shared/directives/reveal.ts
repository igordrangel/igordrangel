import { Directive, ElementRef, inject, OnDestroy, OnInit } from '@angular/core';

@Directive({
  selector: '[appReveal]',
})
export class Reveal implements OnInit, OnDestroy {
  private readonly elementRef = inject<ElementRef<HTMLElement>>(ElementRef);
  private observer?: IntersectionObserver;

  ngOnInit() {
    const element = this.elementRef.nativeElement;
    element.classList.add('motion-reveal-scroll');

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      element.classList.add('motion-visible');
      return;
    }

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        element.classList.add('motion-visible');
        this.observer?.unobserve(element);
      },
      { threshold: 0.12, rootMargin: '0px 0px -5% 0px' },
    );

    this.observer.observe(element);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
