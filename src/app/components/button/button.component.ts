import {
  Directive,
  ElementRef,
  OnInit,
  booleanAttribute,
  effect,
  inject,
  input
} from '@angular/core';

export type ButtonColor =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'icon-only';

@Directive({standalone: true, selector: 'button[appButton],a[appButton]'})
export class ButtonComponent implements OnInit {
  color = input.required<ButtonColor>();
  outline = input(false, {transform: booleanAttribute});
  disabled = input(false, {transform: booleanAttribute});

  private defaultElementsOnHost: ChildNode[] = [];
  private readonly elementRef = inject(ElementRef<HTMLButtonElement>)

  constructor() {
    effect(() => {
      if (this.disabled()) {
        this.elementRef.nativeElement.disabled = this.disabled;
      }
    })
  }

  ngOnInit(): void {
    this.elementRef.nativeElement.classList.add('btn');
    this.elementRef.nativeElement.classList.add(this.getClassByVariant());

    this.elementRef.nativeElement.childNodes.forEach((node: any) =>
      this.defaultElementsOnHost.push(node)
    );
  }

  private getClassByVariant() {
    switch (this.color()) {
      case 'default':
        return `btn${this.outline() ? '-outline-' : '-'}default`;
      case 'primary':
        return `btn${this.outline() ? '-outline-' : '-'}primary`;
      case 'secondary':
        return `btn${this.outline() ? '-outline-' : '-'}secondary`;
      case 'success':
        return `btn${this.outline() ? '-outline-' : '-'}success`;
      case 'warning':
        return `btn${this.outline() ? '-outline-' : '-'}warning`;
      case 'danger':
        return `btn${this.outline() ? '-outline-' : '-'}danger`;
      case 'info':
        return `btn${this.outline() ? '-outline-' : '-'}info`;
      case 'icon-only':
        return `btn-icon`;
    }
  }
}
