import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
@Component({
  selector: 'app-root',
  template:`<router-outlet></router-outlet>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public cadastroForm : FormGroup  = this.formBuilder.group({
    firstName : [{}]
   })
    constructor(private formBuilder: FormBuilder ) { }
}
