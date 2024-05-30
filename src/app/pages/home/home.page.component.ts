import { Component, inject } from "@angular/core";
import { ButtonComponent } from "../../components/button/button.component";
import { CardComponent } from "../../components/card/card.component";
import { ContainerAppComponent } from "../../components/container-app/container-app.component";
import { ContainerIntroComponent } from "../../components/container-intro/container-intro.component";
import { DatalistComponent } from "../../components/datalist/datalist.component";
import { FlexBoxWrapComponent } from "../../components/flex-box-wrap/flex-box-wrap.component";
import { IconComponent } from "../../components/icon/icon.component";
import { SectionContainerComponent } from "../../components/section-container/section-container.component";
import { SubtitleTextComponent } from "../../components/subtitle-text/subtitle-text.component";
import { TimelineComponent } from "../../components/timeline/timeline.component";
import { TitleTextComponent } from "../../components/title-text/title-text.component";
import { PostComponent } from "../../components/post/post.component";
import { HomeService } from "./home.service";
import { AsyncPipe } from "@angular/common";

@Component({
  standalone: true,
  selector: 'app-home-page',
  templateUrl: './home.page.component.html',
  providers: [HomeService],
  imports: [
    AsyncPipe,
    ContainerAppComponent,
    ContainerIntroComponent,
    TitleTextComponent,
    SubtitleTextComponent,
    SectionContainerComponent,
    FlexBoxWrapComponent,
    IconComponent,
    TimelineComponent,
    CardComponent,
    ButtonComponent,
    DatalistComponent,
    PostComponent
  ]
})
export class HomePageComponent {
  private readonly homeService = inject(HomeService);

  projects = this.homeService.projects();
  expirience = this.homeService.expirience();
}
