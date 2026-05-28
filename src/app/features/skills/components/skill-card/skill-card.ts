import { NgOptimizedImage } from '@angular/common';
import { Skill } from '@/core/services/db.models';
import { SKILL_THEMES } from '@/features/skills/components/skill-card/skill-card.themes';
import { LoadingImage } from '@/shared/components/loading-image';
import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.html',
  styleUrl: './skill-card.css',
  host: {
    class: 'block min-h-0',
    '[class.lg:col-span-3]': 'skill().highlight === true',
  },
  imports: [NgOptimizedImage, LoadingImage],
})
export class SkillCard {
  readonly skill = input.required<Skill>();
  readonly index = input(0);

  readonly theme = computed(() => SKILL_THEMES[this.skill().accent ?? 'angular']);

  readonly scrollDelayClass = computed(() => {
    const delays = ['motion-delay-3', 'motion-delay-4', 'motion-delay-5', 'motion-delay-6'] as const;
    return delays[Math.min(this.index(), delays.length - 1)];
  });
}
