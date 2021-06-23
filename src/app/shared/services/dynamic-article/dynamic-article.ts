import { BehaviorSubject } from "rxjs";
import { DynamicComponent } from "../../components/dynamic-component/dynamic-component";

export class DynamicArticle {
  public static currentArticle = new BehaviorSubject<DynamicComponent>(null);
}
