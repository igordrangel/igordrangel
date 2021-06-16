import { NgModule } from "@angular/core";
import { ArticleDevEmTComponent } from "./dev-em-t/article-dev-em-t.component";
import { CommonModule } from "@angular/common";
import { CardsModule } from "../../shared/cards/cards.module";
import { DevEmTModule } from "../../shared/dev-em-t/dev-em-t.module";
import { ArticlesComponent } from "./articles.component";
import { ArticleMeusProjetosComponent } from "./meus-projetos/article-meus-projetos.component";
import { ArticleDesafiosComponent } from "./desafios/article-desafios.component";
import { ArticleCertificadosComponent } from "./certificados/article-certificados.component";

@NgModule({
  declarations: [
    ArticlesComponent,
    ArticleDevEmTComponent,
    ArticleMeusProjetosComponent,
    ArticleDesafiosComponent,
    ArticleCertificadosComponent
  ],
  exports: [
    ArticlesComponent
  ],
  imports: [
    CommonModule,
    DevEmTModule,
    CardsModule
  ]
})
export class ArticlesModule {
}
