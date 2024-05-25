import { Component } from "@angular/core";
import { ContentComponent } from "./content/content.component";
import { HeaderComponent } from "./header/header.component";

@Component({
  standalone: true,
  selector: 'app-container',
  templateUrl: './container-app.component.html',
  imports: [HeaderComponent, ContentComponent]
})
export class ContainerAppComponent {}
