import { Component } from "@angular/core";
import { ContainerAppComponent } from "../../components/container-app/container-app.component";

@Component({
  standalone: true,
  templateUrl: './home.page.component.html',
  imports: [ContainerAppComponent]
})
export class HomePageComponent {}
