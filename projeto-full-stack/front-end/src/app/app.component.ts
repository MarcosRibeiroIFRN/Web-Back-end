import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CepService } from './cep.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
    patinho = 'quack quack';
    contador=0;
    incrementar():void{
      this.contador++
    };
    decrementar():void{
      this.contador--
    };
    constructor(private servico:CepService){};

    consultarCEP():void{
      this.servico.consultar('01001000').subscribe({
        next:(retorno : any)=>{
          console.log(retorno);
        },
        error:(error: any)=>{
          console.log(error);
        },
        complete:()=>{
          console.log("O cep foi encontrado");
        }
      })
    
  }
}
