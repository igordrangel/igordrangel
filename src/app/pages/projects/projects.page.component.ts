import { Component } from "@angular/core";
import { ContainerAppComponent } from "../../components/container-app/container-app.component";

@Component({
  standalone: true,
  selector: 'app-projects-page',
  templateUrl: './projects.page.component.html',
  imports: [ContainerAppComponent]
})
export class ProjectsPageComponent {}
