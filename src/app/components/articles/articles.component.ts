import { Component } from "@angular/core";
import { DynamicArticle } from "../../shared/services/dynamic-article/dynamic-article";

@Component({
  selector: 'idr-articles',
  templateUrl: 'articles.component.html',
  styleUrls: ['articles.component.css']
})
export class ArticlesComponent {
  currentArticle$ = DynamicArticle.currentArticle;
}
