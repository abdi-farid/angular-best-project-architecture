import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService<T> {

  private readonly endpoint = '';

  constructor(private _http: HttpClient) {
  }


  loadAll(): Observable<T[]> {
    return this._http.get<T[]>(this.endpoint)
  }
}
