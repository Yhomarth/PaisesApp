import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private urlApi: string = 'https://restcountries.eu/rest/v2';

  constructor( private http: HttpClient  ) { }

  buscarPais( termino: string ) :Observable<any> {
    const url: string = `${this.urlApi}/name/${termino}`;
    return this.http.get(  url   );


  }


}
