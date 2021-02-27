import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
    <!--
      //Data biding
      <app-title *ngIf="destruir"></app-title>
      <br>
      <button (click)="destruirComponent()">Destruir componente</button>
    -->
    <!-- <app-diretivas-estruturais></app-diretivas-estruturais> -->

    <!--
      //Diretivas
      <app-diretivas-atributos>
        <h1>Aulas de Diretivas Atributo</h1>
        <h3>Final da aula</h3>
      </app-diretivas-atributos>

      <app-diretivas-atributos>
        <h1>Dener Troquatte</h1>
        <h3>Nay Torres</h3>
      </app-diretivas-atributos>
      <app-diretivas-atributos></app-diretivas-atributos>
    -->
    <!--
      <app-new-component></app-new-component>
    -->

    <!--
      <app-input [contador]="addValue"></app-input>
      <br>
      <button (click)="add()"> Add </button>
    -->


    <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit {

  public destruir: boolean = true;


  public addValue: number = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  public add() {
    this.addValue += 1;
  }

  public destruirComponent() {
    this.destruir = false;
  }
}
