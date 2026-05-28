import { Component, input } from '@angular/core';

@Component({
  selector: 'app-career-detail-list',
  templateUrl: './career-detail-list.html',
})
export class CareerDetailList {
  readonly heading = input.required<string>();
  readonly items = input<string[]>();
}
