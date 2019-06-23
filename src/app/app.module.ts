import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainpanelComponent } from './mainpanel/mainpanel.component';
import { ListconfiguratorComponent } from './listconfigurator/listconfigurator.component';
import { ListmasterComponent } from './listmaster/listmaster.component';
import { MatSidenavModule, MatToolbar, MatToolbarModule, MatIconModule} from '@angular/material';
import {TableModule} from 'primeng/table';
@NgModule({
  declarations: [
    
    AppComponent,
    MainpanelComponent,
    ListconfiguratorComponent,
    ListmasterComponent
    
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    TableModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
