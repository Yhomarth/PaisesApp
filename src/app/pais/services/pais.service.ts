import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';
import { tap } from 'rxjs/operators';
//import { Observable, of } from 'rxjs';
// import { catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private urlApi: string = 'https://restcountries.eu/rest/v2';

  constructor( private http: HttpClient  ) { }

  get httpParams(): HttpParams{
    return new HttpParams()
    .set('fields','name;capital;alpha2Code;flag;population');
  }

  buscarPais( termino: string ) :Observable<Country[]> {
    const url: string = `${this.urlApi}/name/${termino}`;
    // return this.http.get(  url   ).pipe( catchError(  (err)=> of( [ ]  )  ));

    return this.http.get<Country[]>(url, {params : this.httpParams });


  }

  buscarCapital(termino: string): Observable<Country[]> {
    const url: string = `${this.urlApi}/capital/${termino}`;
    return this.http.get<Country[]>(url, {params : this.httpParams });
  }

  buscarPorRegion(region: string):Observable<Country[]>{
     
    const url: string =`${this.urlApi}/region/${region}`;
    return this.http.get<Country[]>(url,  {params : this.httpParams }).pipe( 
         tap(console.log) 
         );
  }

  getPaisPorAlpha(id: string): Observable<Country>{
    const url: string = `${this.urlApi}/alpha/${id}`;
    return this.http.get<Country>(url);

  }


}
