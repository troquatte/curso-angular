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

    <app-new-component></app-new-component>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit {

  public destruir: boolean = true;

  constructor() {
  }

  ngOnInit(): void {

  }

  public destruirComponent() {
    this.destruir = false;
  }
}
