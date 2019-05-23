import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // {path:'home',loadChildren:'app/home/home.module#HomeModule', runGuardsAndResolvers: 'always'},
  // {path:'about',loadChildren:'app/about/about.module#AboutModule', runGuardsAndResolvers: 'always'},
  // { path: '**', pathMatch: 'full', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
