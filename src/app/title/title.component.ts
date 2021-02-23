import { Component, OnInit, Input, OnChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit, OnChanges, OnDestroy {

  @Input() public title: string = "Bem vindo";

  constructor() { }

  ngOnInit(): void { }
  ngOnChanges(): void { }
  ngOnDestroy(): void {
    console.log("Deu bom ele foi destruido!");
  }
}
