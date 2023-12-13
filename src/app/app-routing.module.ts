import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './components/counter/counter.component';
import { ProductComponent } from './components/product/product.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  {path:'counter',component:CounterComponent},
  {path:'products',component:ProductComponent},
  {path:'users',component:UsersComponent},
  {path:"",redirectTo:'/counter',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
