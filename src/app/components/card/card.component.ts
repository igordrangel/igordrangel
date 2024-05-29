import { Component, input } from "@angular/core";

@Component({
  standalone: true,
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  thumbnail = input.required<string>()
}
