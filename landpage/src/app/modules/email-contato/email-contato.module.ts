import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { EmailContatoComponent } from './email-contato.component';


@NgModule({
  declarations: [EmailContatoComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [ EmailContatoComponent ]
})
export class EmailContatoModule { }
