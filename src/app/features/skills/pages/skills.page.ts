import { SkillsCategories } from '@/features/skills/components/skills-categories';
import { SkillsFeatured } from '@/features/skills/components/skills-featured';
import { SkillsIntro } from '@/features/skills/components/skills-intro';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.page.html',
  imports: [SkillsIntro, SkillsFeatured, SkillsCategories],
})
export class SkillsPage {}
