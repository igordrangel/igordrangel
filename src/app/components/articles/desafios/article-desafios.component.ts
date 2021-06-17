import { Component } from "@angular/core";
import { CardsInterface } from "../../../shared/cards/cards.component";

@Component({
  selector: 'idr-article-desafios',
  templateUrl: 'article-desafios.component.html',
  styleUrls: ['../articles.component.css']
})
export class ArticleDesafiosComponent {
  public cards: CardsInterface[] = [{
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
}
