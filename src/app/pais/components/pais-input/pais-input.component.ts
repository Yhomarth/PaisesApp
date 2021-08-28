import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {


  @Output() onEnter     : EventEmitter<string> = new EventEmitter(); 
  @Output() onDebaunce  : EventEmitter<string> = new EventEmitter(); 

  debouncer: Subject<string> = new Subject();
  
  termino: string = '';
  @Input() placeholder: string = '';

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.debouncer.
    pipe( debounceTime(500) ) 
    .subscribe(  valor => {
      this.onDebaunce.emit (valor );
    });
    
  }



  buscar() {    
    this.onEnter.emit(  this.termino  );
  }

  teclaPresionada(){
    this.debouncer.next(  this.termino  );
  }

}
