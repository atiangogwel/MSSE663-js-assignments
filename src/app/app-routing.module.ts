import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PizzaAppComponent } from './pizza-app/pizza-app.component';
import { AddPizzaComponent } from './add-pizza/add-pizza.component';
import { AboutComponent } from './about/about.component'; 
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pizzas', component: PizzaAppComponent },
  { path: 'add-pizza', component: AddPizzaComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
