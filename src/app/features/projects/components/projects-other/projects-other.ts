import { Project } from '@/core/services/db.models';
import { PageSection } from '@/shared/components/page-section';
import { ProjectsGrid } from '@/shared/components/projects-grid';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-projects-other',
  templateUrl: './projects-other.html',
  imports: [PageSection, ProjectsGrid],
  host: { class: 'block pt-10 sm:pt-16' },
})
export class ProjectsOther {
  readonly projects = input.required<Project[]>();
}
