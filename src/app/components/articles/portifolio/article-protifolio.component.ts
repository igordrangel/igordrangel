import { Component } from "@angular/core";
import { CardsInterface } from "../../../shared/components/cards/cards.component";

@Component({
  selector: 'idr-article-portifolio',
  templateUrl: 'article-protifolio.component.html',
  styleUrls: ['../articles.component.css']
})
export class ArticleProtifolioComponent {
  public desafios: CardsInterface[] = [{
    title: 'Frontend Mentor | Launch countdown timer',
    link: 'https://github.com/igordrangel/launch-countdown-timer',
    thumbnail: './assets/launch-countdown-timer.jpg'
  },{
    title: 'Flappy Bird',
    link: 'https://github.com/igordrangel/flappy-bird',
    thumbnail: './assets/flappy-bird.jpg'
  },{
    title: 'Desafio Rede Globo | Aplicação React',
    link: 'https://github.com/igordrangel/desafio-globo',
    thumbnail: './assets/desafio-globo.jpg'
  }];
  public projetos: CardsInterface[] = [{
    title: 'Koala UI',
    link: 'https://doc.koalaui.igordrangel.com.br/',
    thumbnail: './assets/koala-ui.jpg'
  },{
    title: 'Koala Utils',
    link: 'https://www.npmjs.com/package/@koalarx/utils',
    thumbnail: './assets/koala-utils.jpg'
  },{
    title: 'Tradsoft',
    link: 'https://github.com/igordrangel?tab=repositories&q=tradsoft&type=&language=&sort=',
    thumbnail: './assets/tradsoft.jpg'
  }];
}
