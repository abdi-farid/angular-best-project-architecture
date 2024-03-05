import {Component} from '@angular/core';
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-list',
  template: `
    <p>
      list works!
    </p>
  `,
  styles: []
})
export class ListComponent<T> {

  constructor(private service: ApiService<T>) {
  }

}
