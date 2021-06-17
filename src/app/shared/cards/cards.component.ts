import { Component, Input } from "@angular/core";

export interface CardsInterface {
  title: string;
  thumbnail: string;
  link: string;
}

@Component({
  selector: 'idr-cards',
  templateUrl: 'cards.component.html',
  styleUrls: ['cards.component.css']
})
export class CardsComponent {
  @Input() cards: CardsInterface[] = [];
}
