import { DOCUMENT } from "@angular/common";
import { Component, ElementRef, Inject, effect, viewChild } from "@angular/core";

@Component({
  standalone: true,
  selector: 'app-section-container',
  templateUrl: './section-container.component.html',
  styleUrl: './section-container.component.css'
})
export class SectionContainerComponent {
  elSection = viewChild<ElementRef<HTMLDivElement>>('section')

  constructor(@Inject(DOCUMENT) document: Document) {
    effect(() => {
      const elSection = this.elSection()
      const elMain = document.querySelector('main')

      if (elSection && !!elMain) {
        elMain.onscroll = (event) => {
          const target = event.target as HTMLElement

          this.animateIfIsVisible(target.scrollTop)
        }
      }
    })
  }

  private animateIfIsVisible(currentPosition: number) {
    const elSection = this.elSection()

    if (elSection && elSection.nativeElement.scrollTop <= currentPosition) {
      elSection.nativeElement.querySelector('h2')?.classList.add('animate__flipInX')
      elSection.nativeElement.querySelector('article')?.classList.add('animate__fadeInUp')
    }
  }
}
