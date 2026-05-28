import { DbService } from '@/core/services/db.service';
import { Reveal } from '@/shared/directives/reveal';
import { ProjectCard } from '@/shared/components/project-card';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-main-projects',
  templateUrl: './main-projects.html',
  imports: [ProjectCard, Reveal],
})
export class MainProjects {
  readonly db = inject(DbService);
}
