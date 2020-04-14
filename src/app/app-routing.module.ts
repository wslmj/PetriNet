import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PetriNetComponent } from './petri-net/petri-net.component';


const routes: Routes = [
  {path: 'petri', component: PetriNetComponent},
  { path: '',
    redirectTo: '/petri',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
