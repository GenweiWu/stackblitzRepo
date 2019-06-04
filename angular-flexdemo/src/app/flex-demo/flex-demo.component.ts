import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flex-demo',
  templateUrl: './flex-demo.component.html',
  styleUrls: ['./flex-demo.component.css']
})
export class FlexDemoComponent implements OnInit {
  flexDirectionValus = ['row', 'row-reverse', 'column', 'column-reverse'];
  flexDirection: string = this.flexDirectionValus[0];

  flexWrapValues = ['nowrap', 'wrap', 'wrap-reverse'];
  flexWrap: string = this.flexWrapValues[0];

  justifyContentValues = ['flex-start', 'flex-end', 'center', 'space-between', 'space-around'];
  justifyContent: string = this.justifyContentValues[0];

  alignItemsValues = ['flex-start', 'flex-end', 'center', 'stretch', 'baseline'];
  alignItems: string = this.alignItemsValues[0];

  alignContentValues = ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'stretch'];
  alignContent = this.alignContentValues[0];


  constructor() { }

  ngOnInit() {
  }

  get flexContainer() {
    return {
      'flex-direction': this.flexDirection,
      'flex-wrap': this.flexWrap,
      'justify-content': this.justifyContent,
      'align-items': this.alignItems,
      'align-content': this.alignContent
    }

  }

}