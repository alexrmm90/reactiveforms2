import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ReactiveFormsComponent } from './reactive-forms.component';

@NgModule({
  declarations: [ReactiveFormsComponent],
  imports: [ReactiveFormsModule, FormsModule],
})
export class ReactiveFormsComponentModule {}
