import { Component } from "@angular/core";
import { ContainerAppComponent } from "../../components/container-app/container-app.component";
import { TitleTextComponent } from "../../components/title-text/title-text.component";
import { SubtitleTextComponent } from "../../components/subtitle-text/subtitle-text.component";
import { ContainerIntroComponent } from "../../components/container-intro/container-intro.component";
import { SectionContainerComponent } from "../../components/section-container/section-container.component";
import { FlexBoxWrapComponent } from "../../components/flex-box-wrap/flex-box-wrap.component";
import { IconComponent } from "../../components/icon/icon.component";

@Component({
  standalone: true,
  selector: 'app-home-page',
  templateUrl: './home.page.component.html',
  imports: [
    ContainerAppComponent,
    ContainerIntroComponent,
    TitleTextComponent,
    SubtitleTextComponent,
    SectionContainerComponent,
    FlexBoxWrapComponent,
    IconComponent
  ]
})
export class HomePageComponent {}
