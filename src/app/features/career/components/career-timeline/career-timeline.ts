import { CareerDetailList } from '@/features/career/components/career-detail-list';
import { Career } from '@/core/services/db.models';
import { DbService } from '@/core/services/db.service';
import { Button } from '@/shared/components/button';
import { TagChip } from '@/shared/components/tag-chip';
import { Reveal } from '@/shared/directives/reveal';
import {
  afterNextRender,
  Component,
  computed,
  DestroyRef,
  ElementRef,
  inject,
  signal,
  viewChild,
} from '@angular/core';

const DESKTOP_ITEM_WIDTH = 112;
const DESKTOP_ITEM_GAP = 32;
const MOBILE_ITEM_WIDTH = 80;
const MOBILE_ITEM_GAP = 16;
const COMPACT_BREAKPOINT = 640;

@Component({
  selector: 'app-career-timeline',
  templateUrl: './career-timeline.html',
  imports: [Button, Reveal, CareerDetailList, TagChip],
})
export class CareerTimeline {
  private readonly db = inject(DbService);
  private readonly destroyRef = inject(DestroyRef);

  private readonly viewport = viewChild<ElementRef<HTMLElement>>('viewport');

  readonly careers = this.db.career;
  readonly activeIndex = signal(this.db.career.length - 1);
  readonly contentKey = signal(0);
  readonly slideDirection = signal<'left' | 'right'>('right');
  readonly viewportWidth = signal(0);

  readonly activeCareer = computed(() => this.careers[this.activeIndex()]);
  readonly canGoPrev = computed(() => this.activeIndex() > 0);
  readonly canGoNext = computed(() => this.activeIndex() < this.careers.length - 1);

  readonly timelineMetrics = computed(() => {
    const compact = this.viewportWidth() > 0 && this.viewportWidth() < COMPACT_BREAKPOINT;

    return compact
      ? { itemWidth: MOBILE_ITEM_WIDTH, itemGap: MOBILE_ITEM_GAP }
      : { itemWidth: DESKTOP_ITEM_WIDTH, itemGap: DESKTOP_ITEM_GAP };
  });

  readonly trackTransform = computed(() => {
    const width = this.viewportWidth();
    if (!width) {
      return 'translateX(0)';
    }

    const { itemWidth, itemGap } = this.timelineMetrics();
    const stride = itemWidth + itemGap;
    const activeCenter = this.activeIndex() * stride + itemWidth / 2;

    return `translateX(${width / 2 - activeCenter}px)`;
  });

  constructor() {
    afterNextRender(() => {
      const element = this.viewport()?.nativeElement;
      if (!element) {
        return;
      }

      const updateWidth = () => this.viewportWidth.set(element.clientWidth);

      updateWidth();

      const observer = new ResizeObserver(updateWidth);
      observer.observe(element);
      this.destroyRef.onDestroy(() => observer.disconnect());
    });
  }

  formatYear(career: Career): string {
    const start = career.startDate.getFullYear();
    const end = career.endDate?.getFullYear();

    return end ? `${start} – ${end}` : `${start} – Atual`;
  }

  select(index: number) {
    if (index === this.activeIndex() || index < 0 || index >= this.careers.length) {
      return;
    }

    this.slideDirection.set(index > this.activeIndex() ? 'right' : 'left');
    this.activeIndex.set(index);
    this.contentKey.update((key) => key + 1);
  }

  prev() {
    this.select(this.activeIndex() - 1);
  }

  next() {
    this.select(this.activeIndex() + 1);
  }
}
