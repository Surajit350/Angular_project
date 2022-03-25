import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { NavbarComponent } from './navbar/navbar.component';
import { PageNotFoundComponent} from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '',redirectTo:'', pathMatch: 'full'},
  {path: '**',component:PageNotFoundComponent}
  //{path:'service',component: NavbarComponent},
 // {path:'about',component: NavbarComponent},
 // {path:'signup',component: NavbarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
