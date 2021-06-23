import { NgModule } from "@angular/core";
import { DevEmTComponent } from "./dev-em-t.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    DevEmTComponent
  ],
  exports: [
    DevEmTComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DevEmTModule {
}
