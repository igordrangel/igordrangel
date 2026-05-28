import { CareerIntro } from '@/features/career/components/career-intro';
import { CareerTimeline } from '@/features/career/components/career-timeline';
import { Component } from '@angular/core';

@Component({
  selector: 'app-career',
  templateUrl: './career.page.html',
  imports: [CareerIntro, CareerTimeline],
})
export class CareerPage {}
