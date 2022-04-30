import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Coffee } from './coffee';

@Injectable({
  providedIn: 'root'
})

export class CoffeeService {

  private apiUrl = environment.baseUrl + '202212_MISW4104_Grupo3.json';

  constructor(private http: HttpClient) { }

  getCoffees(): Observable<Coffee[]> {
    return this.http.get<Coffee[]>(this.apiUrl);
  }

}
