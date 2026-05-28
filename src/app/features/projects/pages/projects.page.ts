import { ProjectsFeatured } from '@/features/projects/components/projects-featured';
import { ProjectsIntro } from '@/features/projects/components/projects-intro';
import { ProjectsOther } from '@/features/projects/components/projects-other';
import { SaasFeatured } from '@/features/projects/components/saas-featured';
import { DbService } from '@/core/services/db.service';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  imports: [ProjectsIntro, SaasFeatured, ProjectsFeatured, ProjectsOther],
})
export class ProjectsPage {
  private readonly db = inject(DbService);

  readonly featuredSaas = this.db.featuredSaas;
  readonly otherProjects = this.db.otherProjects;
}
