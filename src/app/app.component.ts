import { Component } from '@angular/core';
import { BotonesComponent } from './botones/botones.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'AppCalculadora';
  value1:number = NaN;
  value2:number = NaN;
  operador: string = "";
  t:boolean=false;
  exprecion: string=" ";
  resultado: number= 0;
  
  onNotify(number:number){
    this.exprecion += number+ "";
    
  }

  onclick(event:Event){
    let c = (<HTMLButtonElement>event.target).value+ "";
    if(c === "="){
      if(this.exprecion === " "){
        window.alert("Ingrese una operacion");
      } else if(this.t){
        let arrg = this.exprecion.split(this.operador);
        this.value1 = Number(arrg[0]);
        this.value2 = Number(arrg[1]);
        if(this.value2 !== NaN && this.value1 !== NaN){
          switch (this.operador) {
            case "+": this.resultado = this.value1 + this.value2
              break;          
            case "-": this.resultado = this.value1 - this.value2;
              break;
          }
          this.exprecion = this.resultado + "";
          this.t = false;
        }
      }
    } else {
      this.exprecion += c + "";
      this.operador = c;
      this.t =true;
    }
  }
}
