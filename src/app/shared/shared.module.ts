import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewComponentComponent } from './new-component/new-component.component';



@NgModule({
  declarations: [NewComponentComponent],
  exports: [NewComponentComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
