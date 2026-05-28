import { DbService } from '@/core/services/db.service';
import { ProjectsShowcase } from '@/shared/components/projects-showcase';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-projects-featured',
  templateUrl: './projects-featured.html',
  imports: [ProjectsShowcase],
})
export class ProjectsFeatured {
  private readonly db = inject(DbService);

  readonly mainProjects = this.db.mainProjects;
}
