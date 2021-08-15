import { Component } from '@angular/core';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent {

public termino: string = '';

buscar() {
  console.log('Hey!!');
  console.log(this.termino);
}

}
