import {Component} from '@angular/core';
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-create',
  template: `
    <p>
      create works!
    </p>
  `,
  styles: []
})
export class CreateComponent<T> {
  constructor(private service: ApiService<T>) {
  }
}
