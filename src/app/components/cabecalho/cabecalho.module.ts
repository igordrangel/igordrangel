import { NgModule } from "@angular/core";
import { CabecalhoComponent } from "./cabecalho.component";
import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  declarations: [
    CabecalhoComponent
  ],
  exports: [
    CabecalhoComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class CabecalhoModule {
}
