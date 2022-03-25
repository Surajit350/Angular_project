import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogpostListComponent} from './blogpost-list/blogpost-list.component';
import { BlogpostDetailsComponent} from './blogpost-details/blogpost-details.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'blog', component: BlogpostListComponent},
  {path: 'details', component: BlogpostDetailsComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogpostRoutingModule { }
