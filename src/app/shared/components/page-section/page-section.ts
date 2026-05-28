import { SectionHeader } from '@/shared/components/section-header';
import { Component, computed, input } from '@angular/core';

type SectionGap = '16' | '10' | '20';
type SectionPadding = 'default' | 'compact' | 'categories' | 'none';

@Component({
  selector: 'app-page-section',
  templateUrl: './page-section.html',
  imports: [SectionHeader],
})
export class PageSection {
  readonly title = input<string>();
  readonly description = input<string>();
  readonly gap = input<SectionGap>('16');
  readonly padding = input<SectionPadding>('default');
  readonly fullWidth = input(false);

  readonly articleClass = computed(() => {
    const classes = ['flex flex-col items-center'];

    const gap = this.gap();
    if (gap === '10') {
      classes.push('gap-8', 'sm:gap-10');
    } else if (gap === '20') {
      classes.push('gap-12', 'sm:gap-20');
    } else {
      classes.push('gap-10', 'sm:gap-16');
    }

    switch (this.padding()) {
      case 'compact':
        classes.push('pb-8');
        break;
      case 'categories':
        classes.push('pt-10', 'pb-16', 'sm:pt-16', 'sm:pb-25');
        break;
      case 'none':
        break;
      default:
        classes.push('pb-16', 'sm:pb-25');
    }

    if (this.fullWidth()) {
      classes.push('w-full');
    }

    return classes.join(' ');
  });
}
