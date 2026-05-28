import { Project } from '@/core/services/db.models';
import { Reveal } from '@/shared/directives/reveal';
import { ProjectCard } from '@/shared/components/project-card';
import { booleanAttribute, Component, computed, input } from '@angular/core';

type GridColumns = '2' | '3' | '4';
type MotionDelay = '2' | '3';

@Component({
  selector: 'app-projects-grid',
  templateUrl: './projects-grid.html',
  host: { class: 'block w-full' },
  imports: [ProjectCard, Reveal],
})
export class ProjectsGrid {
  readonly projects = input.required<Project[]>();
  readonly compact = input(false, { transform: booleanAttribute });
  readonly columns = input<GridColumns>('2');
  readonly revealDelay = input<MotionDelay>('2');

  readonly gridClass = computed(() => {
    const delay = `motion-delay-${this.revealDelay()}`;
    const columnClass =
      this.columns() === '4'
        ? 'sm:grid-cols-2 lg:grid-cols-4'
        : this.columns() === '3'
          ? 'sm:grid-cols-2 lg:grid-cols-3'
          : 'md:grid-cols-2';

    return `${delay} grid w-full grid-cols-1 gap-4 px-4 ${columnClass}`;
  });
}
