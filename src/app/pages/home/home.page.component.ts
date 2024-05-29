import { Component } from "@angular/core";
import { ContainerAppComponent } from "../../components/container-app/container-app.component";
import { TitleTextComponent } from "../../components/title-text/title-text.component";
import { SubtitleTextComponent } from "../../components/subtitle-text/subtitle-text.component";
import { ContainerIntroComponent } from "../../components/container-intro/container-intro.component";
import { SectionContainerComponent } from "../../components/section-container/section-container.component";
import { FlexBoxWrapComponent } from "../../components/flex-box-wrap/flex-box-wrap.component";
import { IconComponent } from "../../components/icon/icon.component";
import { TimelineComponent } from "../../components/timeline/timeline.component";
import { CardComponent } from "../../components/card/card.component";
import { ButtonComponent } from "../../components/button/button.component";

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
    IconComponent,
    TimelineComponent,
    CardComponent,
    ButtonComponent
  ]
})
export class HomePageComponent {
  projects = [
    {
      thumbnail: 'wallpapers/portifolio.jpg',
      title: 'Portifólio' ,
      description: 'Landing Page aprensentando minhas skills e projetos',
      actions: [
        {
          icon: 'fa-solid fa-arrow-up-right-from-square',
          label: 'Site',
          link: 'https://igordrangel.com.br',
          raisedButton: true
        },
        {
          icon: 'fa-brands fa-github',
          link: 'https://github.com/igordrangel/igordrangel',
          raisedButton: false
        }
      ]
    },
    {
      thumbnail: 'wallpapers/cat-ui.jpg',
      title: 'CatUI' ,
      description: 'Cat UI é um Design System para projetos Angular, onde seu maior objetivo é abstrair ao máximo a criação de sistemas, permitindo mais produtividade.',
      actions: [
        {
          icon: 'fa-solid fa-arrow-up-right-from-square',
          label: 'Documentação',
          link: 'https://doc.catui.igordrangel.com.br',
          raisedButton: true
        },
        {
          icon: 'fa-brands fa-github',
          link: 'https://github.com/igordrangel/cat-ui',
          raisedButton: false
        }
      ]
    },
    {
      thumbnail: 'wallpapers/cat-ui-poc-messenger-manager.jpg',
      title: 'Messenger Manager' ,
      description: 'Uma POC de uma aplicação de administração de processos de mensageria utilizando Angular e CatUI',
      actions: [
        {
          icon: 'fa-solid fa-arrow-up-right-from-square',
          label: 'Demonstração',
          link: 'https://poc-messenger-manager.igordrangel.com.br/',
          raisedButton: true
        },
        {
          icon: 'fa-brands fa-github',
          link: 'https://github.com/igordrangel/poc-app-mensageria-ui',
          raisedButton: false
        }
      ]
    },
    {
      thumbnail: 'wallpapers/koala-utils.jpg',
      title: 'Koala Utils' ,
      description: 'Uma biblioteca para manimulação, transformação e requisição de dados.',
      actions: [
        {
          icon: 'fa-brands fa-npm',
          link: 'https://www.npmjs.com/package/@koalarx/utils',
          raisedButton: false
        },
        {
          icon: 'fa-brands fa-github',
          link: 'https://github.com/igordrangel/koala-utils',
          raisedButton: false
        }
      ]
    }
  ]
}
