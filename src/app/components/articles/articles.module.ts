import { NgModule } from "@angular/core";
import { ArticleDevEmTComponent } from "./dev-em-t/article-dev-em-t.component";
import { CommonModule } from "@angular/common";
import { CardsModule } from "../../shared/components/cards/cards.module";
import { DevEmTModule } from "../../shared/components/dev-em-t/dev-em-t.module";
import { ArticlesComponent } from "./articles.component";
import { ArticleMeusProjetosComponent } from "./meus-projetos/article-meus-projetos.component";
import { ArticleDesafiosComponent } from "./desafios/article-desafios.component";
import { ArticleCertificadosComponent } from "./certificados/article-certificados.component";
import { ArticleIntroducaoComponent } from "./introducao/article-introducao.component";
import { DynamicComponentModule } from "../../shared/components/dynamic-component/dynamic-component.module";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [
    ArticlesComponent,
    ArticleIntroducaoComponent,
    ArticleDevEmTComponent,
    ArticleMeusProjetosComponent,
    ArticleDesafiosComponent,
    ArticleCertificadosComponent
  ],
  exports: [
    ArticlesComponent,
    ArticleIntroducaoComponent,
    ArticleDevEmTComponent,
    ArticleMeusProjetosComponent,
    ArticleDesafiosComponent,
    ArticleCertificadosComponent
  ],
  imports: [
    CommonModule,
    DevEmTModule,
    CardsModule,
    MatButtonModule,
    DynamicComponentModule
  ]
})
export class ArticlesModule {
}
