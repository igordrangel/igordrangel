import { NgModule } from "@angular/core";
import { RodapeComponent } from "./rodape.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    RodapeComponent
  ],
  exports: [
    RodapeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RodapeModule {
}
