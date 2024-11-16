import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TodoApiService {

  constructor(
    private http: HttpClient
  ) { }
}
