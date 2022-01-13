import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Testömegindex';
  weight:string;
  height:string;
  index:string;

  constructor(){
    this.weight = ''
    this.height = '';
    this.index = '';

  }
  calcIndex():any{
    let index = Number(this.weight)/Math.pow(Number(this.height)/100,2);
    this.index = String(index);
    this.weight = '';
    this.height = '';

    
  }
}
