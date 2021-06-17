import { Component } from "@angular/core";
import { CardsInterface } from "../../../shared/cards/cards.component";

@Component({
  selector: 'idr-article-meus-projetos',
  templateUrl: 'article-meus-projetos.component.html',
  styleUrls: ['../articles.component.css']
})
export class ArticleMeusProjetosComponent {
  public cards: CardsInterface[] = [{
    title: 'Koala UI',
    link: 'https://koalaui.igordrangel.com.br',
    thumbnail: './assets/koala-ui.jpg'
  },{
    title: 'Koala Utils',
    link: 'https://www.npmjs.com/package/koala-utils',
    thumbnail: './assets/koala-utils.jpg'
  }];
}
