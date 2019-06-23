import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { CitigridComponent } from './citigrid/citigrid.component';
import { ConfigurableGridComponent } from 'src/grid/configurable-grid/configurable-grid.component';
import { MainpanelComponent } from './mainpanel/mainpanel.component';

const routes: Routes = [
  { path: 'list/:id', component: ConfigurableGridComponent},
  { path: '',
    pathMatch: 'full',
    component: MainpanelComponent,
    outlet: 'main'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
