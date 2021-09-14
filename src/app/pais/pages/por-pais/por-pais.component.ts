import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent{

  termino: string = '';
  hayError: boolean = false;
  paises : Country[] = [];
  paisesSugeridos : Country[] = [];
  mostrarSugerencias: boolean = false;

  placeholder: string = 'Buscar por Pais';

  constructor( private paisService: PaisService  ) { }

  buscar(termino: string) {

    this.mostrarSugerencias = false;

    this.hayError = false;
    this.termino = termino;
    
    this.paisService.buscarPais( termino  ).subscribe (
      (paises) => {
        this.paises = paises;
      }, 
      (err) => {
        this.hayError = true;
        this.paises = [];
      }
    );

    this.paisesSugeridos = [];
  }

  sugerencia( termino: string ){

    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = (termino.length > 0) ;
 
    this.paisService.buscarPais( termino )
          .subscribe( paises => this.paisesSugeridos = paises.splice(0,3) , 
            err => this.paisesSugeridos = []);

  }


}
