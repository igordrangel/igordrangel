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
  }, {
    title: 'Flappy Bird',
    link: 'https://github.com/igordrangel/flappy-bird',
    thumbnail: './assets/flappy-bird.jpg'
  }, {
    title: 'Desafio Rede Globo | Aplicação React',
    link: 'https://github.com/igordrangel/desafio-globo',
    thumbnail: './assets/desafio-globo.jpg'
  }, {
    title: 'Desafio 01 React | Rocketseat',
    link: 'https://github.com/igordrangel/desafio-01-react-rocketseat',
    thumbnail: './assets/desafio-rocketseat-01.jpg'
  }, {
    title: 'Desafio 02 React | Rocketseat',
    link: 'https://github.com/igordrangel/desafio-02-react-rocketseat',
    thumbnail: './assets/desafio-rocketseat-02.jpg'
  }];
  public projetos: CardsInterface[] = [{
    title: 'Cat UI - POC Messenger Manager',
    link: 'https://github.com/igordrangel/poc-app-mensageria-ui',
    thumbnail: './assets/cat-ui-poc-messenger-manager.jpg'
  }, {
    title: 'Cat UI - Example CRUD Page',
    link: 'https://doc.catui.igordrangel.com.br/guias/criando-uma-aplicacao-de-crud',
    thumbnail: './assets/cat-ui-guide-crud-app.jpg'
  }, {
    title: 'Cat UI',
    link: 'https://doc.catui.igordrangel.com.br/',
    thumbnail: './assets/cat-ui.jpg'
  }, {
    title: 'Koala Scrapping',
    link: 'https://www.npmjs.com/package/@koalarx/scrapping',
    thumbnail: './assets/koala-scrapping.jpg'
  }, {
    title: 'Koala UI',
    link: 'https://doc.koalaui.igordrangel.com.br/',
    thumbnail: './assets/koala-ui.jpg'
  }, {
    title: 'Koala Utils',
    link: 'https://www.npmjs.com/package/@koalarx/utils',
    thumbnail: './assets/koala-utils.jpg'
  }, {
    title: 'Tradsoft',
    link: 'https://github.com/igordrangel?tab=repositories&q=tradsoft&type=&language=&sort=',
    thumbnail: './assets/tradsoft.jpg'
  }];
}
