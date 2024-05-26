import { Component } from "@angular/core";
import { ContentComponent } from "./content/content.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  standalone: true,
  selector: 'app-container',
  templateUrl: './container-app.component.html',
  styleUrl: './container-app.component.css',
  imports: [HeaderComponent, ContentComponent, FooterComponent]
})
export class ContainerAppComponent {}
