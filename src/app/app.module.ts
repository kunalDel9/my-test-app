import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainpanelComponent } from './mainpanel/mainpanel.component';
import { ListconfiguratorComponent } from './listconfigurator/listconfigurator.component';
import { ListmasterComponent } from './listmaster/listmaster.component';
import { MatSidenavModule, MatSelectModule, MatToolbarModule, MatIconModule} from '@angular/material';
import {TableModule} from 'primeng/table';

import { ConfigurableGridModule } from 'src/grid/configurable-grid/configurable-grid.module';
// import { ConfigurableGridComponent } from 'src/grid/configurable-grid/configurablegrid/configurable-grid.component';
@NgModule({
  declarations: [
    AppComponent,
    MainpanelComponent,
    ListconfiguratorComponent,
    ListmasterComponent,
    // ConfigurableGridComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    TableModule, MatSelectModule,
    HttpClientModule,
    ConfigurableGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
