import { Project } from '@/core/services/db.models';
import { PageSection } from '@/shared/components/page-section';
import { ProjectsGrid } from '@/shared/components/projects-grid';
import { booleanAttribute, Component, input } from '@angular/core';

type SectionPadding = 'default' | 'compact' | 'categories' | 'none';
type GridColumns = '2' | '4';
type MotionDelay = '2' | '3';

@Component({
  selector: 'app-projects-showcase',
  templateUrl: './projects-showcase.html',
  imports: [PageSection, ProjectsGrid],
})
export class ProjectsShowcase {
  readonly title = input<string>();
  readonly description = input<string>();
  readonly projects = input.required<Project[]>();
  readonly padding = input<SectionPadding>('default');
  readonly compact = input(false, { transform: booleanAttribute });
  readonly columns = input<GridColumns>('2');
  readonly revealDelay = input<MotionDelay>('2');
}
