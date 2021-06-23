import { Injectable, Type } from "@angular/core";
import { DynamicComponent } from "../../components/dynamic-component/dynamic-component";
import { DynamicArticle } from "./dynamic-article";

@Injectable({providedIn: 'any'})
export class DynamicArticleService {

  changeArticle(article: Type<any>) {
    DynamicArticle.currentArticle.next(new DynamicComponent(article));
  }
}
