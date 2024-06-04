import { NgOptimizedImage } from "@angular/common";
import { Component, input } from "@angular/core";

@Component({
  standalone: true,
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  imports: [NgOptimizedImage]
})
export class CardComponent {
  thumbnail = input.required<string>()
  alt = input.required<string>()
}
