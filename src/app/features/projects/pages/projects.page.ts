import { ProjectsHeroIcon } from '@/features/projects/components/projects-hero-icon';
import { SaasFeatured } from '@/features/projects/components/saas-featured';
import { DbService } from '@/core/services/db.service';
import { Reveal } from '@/shared/directives/reveal';
import { ProjectCard } from '@/shared/components/project-card';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  imports: [ProjectsHeroIcon, SaasFeatured, ProjectCard, Reveal],
})
export class ProjectsPage {
  readonly db = inject(DbService);
}
