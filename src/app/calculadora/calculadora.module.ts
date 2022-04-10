import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculadoraComponent } from '../calculadora/components/calculadora.component';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CalculadoraComponent
  ],
  exports: [
    CalculadoraComponent
  ]
})
export class CalculadoraModule { }
