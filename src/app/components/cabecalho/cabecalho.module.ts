import { NgModule } from "@angular/core";
import { CabecalhoComponent } from "./cabecalho.component";
import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [
    CabecalhoComponent
  ],
  exports: [
    CabecalhoComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ]
})
export class CabecalhoModule {
}
