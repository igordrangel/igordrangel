import { CareerHeroIcon } from '@/features/career/components/career-hero-icon';
import { PageHero } from '@/shared/components/page-hero';
import { Component } from '@angular/core';

@Component({
  selector: 'app-career-intro',
  templateUrl: './career-intro.html',
  imports: [PageHero, CareerHeroIcon],
})
export class CareerIntro {}
