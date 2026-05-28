import { ProjectsHeroIcon } from '@/features/projects/components/projects-hero-icon';
import { PageHero } from '@/shared/components/page-hero';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects-intro',
  templateUrl: './projects-intro.html',
  imports: [PageHero, ProjectsHeroIcon],
})
export class ProjectsIntro {}
