import { DbService } from '@/core/services/db.service';
import { PageSection } from '@/shared/components/page-section';
import { SectionHeader } from '@/shared/components/section-header';
import { TagChip } from '@/shared/components/tag-chip';
import { Reveal } from '@/shared/directives/reveal';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-skills-categories',
  templateUrl: './skills-categories.html',
  host: { class: 'block w-full px-4' },
  imports: [PageSection, SectionHeader, TagChip, Reveal],
})
export class SkillsCategories {
  private readonly db = inject(DbService);

  readonly skillCategories = this.db.skillCategories;
}
