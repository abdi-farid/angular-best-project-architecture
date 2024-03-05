import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListComponent} from './components/list/list.component';
import {CreateComponent} from './components/create/create.component';
import {FormComponent} from './components/form/form.component';


const GENERIC_COMPS = [
  ListComponent,
  CreateComponent,
  FormComponent
]

@NgModule({
  declarations: [
    ...GENERIC_COMPS
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule {
}
