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
import { RouterModule, Routes } from '@angular/router';
import { CitigridComponent } from './citigrid/citigrid.component';
import { ConfigurableGridModule } from 'src/grid/configurable-grid/configurable-grid.module';
// const appRoutes: Routes = [
//   { path: 'list/:id',      component: CitigridComponent },
//   { path: '',pathMatch: 'full', component: MainpanelComponent },
//   // { path: '',
//   //   redirectTo: '',
//   //   pathMatch: 'full',
//   //   component: MainpanelComponent 
//   // }
//   // { path: '**', component: PageNotFoundComponent }
// ]; 
@NgModule({
  declarations: [
    
    AppComponent,
    MainpanelComponent,
    ListconfiguratorComponent,
    ListmasterComponent,
    CitigridComponent
    
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
    // RouterModule.forRoot(
    //   appRoutes,
    //   { enableTracing: false } // <-- debugging purposes only
    // )

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
