import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
    `
      li {
        cursor : pointer;
      }
    `
  ]
})
export class SidebarComponent  {

  opcionActiva: string = '';
  
  opciones: TipoOpciones[] = [
    {
      ruta : '',
      titulo : 'Por País'
    }, 
    {
      ruta: 'region',
      titulo: 'Por Región'
    },
    {
      ruta: 'capital',
      titulo: 'Por Capital'
    }
  ];
  
  constructor() { } 


  animar(opcion: string){
    if(opcion === this.opcionActiva) {return;}
    this.opcionActiva = opcion;
  }

  getClaseCSS(opcion:string) {
    return this.opcionActiva == opcion ? 'animate__animated animate__bounce' : '';
  }

}

type TipoOpciones = {
  titulo : string,
  ruta : string
}
