import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nome = 'Jose'
  idade = 20

  adicionar(){
    console.log("Adicionando...")
  }

  alterarNome(evento){
    console.log(evento.target.value)
    this.nome = evento.target.value
  }

  lancarDado(){
    return Math.floor((Math.random() * 6)) + 1
  }
}
