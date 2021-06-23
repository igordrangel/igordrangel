import { Component, OnInit, Type } from "@angular/core";
import { ArticleIntroducaoComponent } from "../articles/introducao/article-introducao.component";
import { ArticleDevEmTComponent } from "../articles/dev-em-t/article-dev-em-t.component";
import { ArticleCertificadosComponent } from "../articles/certificados/article-certificados.component";
import { DynamicArticleService } from "../../shared/services/dynamic-article/dynamic-article.service";
import { ArticleProtifolioComponent } from "../articles/portifolio/article-protifolio.component";

@Component({
  selector: 'idr-cabecalho',
  templateUrl: 'cabecalho.component.html',
  styleUrls: ['cabecalho.component.css']
})
export class CabecalhoComponent implements OnInit {
  public menuOptions = [{
    label: 'Introdução',
    active: true,
    component: ArticleIntroducaoComponent
  }, {
    label: 'Dev em <T>',
    active: false,
    component: ArticleDevEmTComponent
  }, {
    label: 'Portifólio',
    active: false,
    component: ArticleProtifolioComponent
  }, {
    label: 'Certificados',
    active: false,
    component: ArticleCertificadosComponent
  }]

  constructor(private dynamicArticleService: DynamicArticleService) {
  }

  ngOnInit() {
    this.changeArticle(ArticleIntroducaoComponent);
  }

  changeArticle(article: Type<any>) {
    this.menuOptions.map(option => {
      option.active = option.component === article
    });
    this.dynamicArticleService.changeArticle(article);
  }
}
