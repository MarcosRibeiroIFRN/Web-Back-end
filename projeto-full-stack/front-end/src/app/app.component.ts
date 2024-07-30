import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

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
  }
  decrementar():void{
    this.contador--
  }
}
