import { Dropdown } from '@/shared/components/dropdown';
import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-tag-chip',
  templateUrl: './tag-chip.html',
  styleUrl: './tag-chip.css',
  host: { class: 'inline-flex max-w-full' },
  imports: [Dropdown],
})
export class TagChip {
  readonly label = input.required<string>();
  readonly details = input<string>();
  readonly align = input<'center' | 'left'>('center');

  readonly chipClass = computed(() => {
    const classes = [
      'inline-flex max-w-full items-center gap-1.5 rounded-full border border-base-content/25 bg-base-200/60 px-3 py-1.5 text-xs leading-relaxed font-normal text-neutral-300',
    ];

    if (this.align() === 'left') {
      classes.push('text-left', 'break-words', 'whitespace-normal');
    } else {
      classes.push('text-center', 'break-words', 'whitespace-normal');
    }

    if (this.details()) {
      classes.push(
        'cursor-pointer whitespace-nowrap transition-colors hover:border-base-content/40 hover:bg-base-200',
      );
    }

    return classes.join(' ');
  });
}
