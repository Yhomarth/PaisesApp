import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';
//import { Observable, of } from 'rxjs';
// import { catchError } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private urlApi: string = 'https://restcountries.eu/rest/v2';

  constructor( private http: HttpClient  ) { }

  buscarPais( termino: string ) :Observable<Country[]> {
    const url: string = `${this.urlApi}/name/${termino}`;
    // return this.http.get(  url   ).pipe( catchError(  (err)=> of( [ ]  )  ));

    return this.http.get<Country[]>(url);


  }

  buscarCapital(termino: string): Observable<Country[]> {
    const url: string = `${this.urlApi}/capital/${termino}`;
    return this.http.get<Country[]>(url);
  }

  buscarPorRegion(region: string):Observable<Country[]>{
    //https://restcountries.eu/rest/v2/region/{region}
    const url: string =`${this.urlApi}/region/${region}`;
    return this.http.get<Country[]>(url);
  }

  getPaisPorAlpha(id: string): Observable<Country>{
    const url: string = `${this.urlApi}/alpha/${id}`;
    return this.http.get<Country>(url);

  }


}
