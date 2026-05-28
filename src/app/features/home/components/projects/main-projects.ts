import { DbService } from '@/core/services/db.service';
import { ProjectsShowcase } from '@/shared/components/projects-showcase';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-main-projects',
  templateUrl: './main-projects.html',
  imports: [ProjectsShowcase],
})
export class MainProjects {
  private readonly db = inject(DbService);

  readonly mainProjects = this.db.mainProjects;
}
