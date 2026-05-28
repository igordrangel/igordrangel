import { SkillCard } from '@/features/skills/components/skill-card';
import { DbService } from '@/core/services/db.service';
import { PageSection } from '@/shared/components/page-section';
import { Reveal } from '@/shared/directives/reveal';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-skills-featured',
  templateUrl: './skills-featured.html',
  imports: [PageSection, SkillCard, Reveal],
})
export class SkillsFeatured {
  private readonly db = inject(DbService);

  readonly mainSkills = this.db.mainSkills;
}
