import { Component } from "@angular/core";
import { LogotypeComponent } from "../logotype/logotype.component";

@Component({
  standalone: true,
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  imports: [LogotypeComponent]
})
export class FooterComponent {}
