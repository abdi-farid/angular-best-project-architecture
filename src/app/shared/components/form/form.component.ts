import {Component} from '@angular/core';
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-form',
  template: `
    <p>
      form works!
    </p>
  `,
  styles: []
})
export class FormComponent<T> {
  constructor(private service: ApiService<T>) {
  }
}
