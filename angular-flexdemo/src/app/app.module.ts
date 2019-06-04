import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FlexDemoComponent } from './flex-demo/flex-demo.component';
import { ChoosePanelComponent } from './choose-panel/choose-panel.component';
import { FlexDemo222Component } from './flex-demo222/flex-demo222.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, FlexDemoComponent, ChoosePanelComponent, FlexDemo222Component ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
