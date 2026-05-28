import { SkillsHeroIcon } from '@/features/skills/components/skills-hero-icon';
import { PageHero } from '@/shared/components/page-hero';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills-intro',
  templateUrl: './skills-intro.html',
  imports: [PageHero, SkillsHeroIcon],
})
export class SkillsIntro {}
