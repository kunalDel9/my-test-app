import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {TableModule} from 'primeng/table';
import { ConfigurableGridComponent } from './configurablegrid/configurable-grid.component';
import { AgGridModule } from 'ag-grid-angular';


@NgModule({
  declarations: [ConfigurableGridComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
   // TableModule,
    AgGridModule.withComponents([ConfigurableGridComponent])
  ]
})
export class ConfigurableGridModule { }
