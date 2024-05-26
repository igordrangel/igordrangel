import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { LogotypeComponent } from "../logotype/logotype.component";

@Component({
  standalone: true,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  imports: [LogotypeComponent, RouterModule]
})
export class HeaderComponent {}
