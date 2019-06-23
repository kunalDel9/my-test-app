import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CitigridComponent } from './citigrid/citigrid.component';

const routes: Routes = [
  { path: 'list/:id', component: CitigridComponent},
  { path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
