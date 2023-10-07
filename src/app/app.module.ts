import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PizzaAppComponent } from './pizza-app/pizza-app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { PizzaService } from './pizza.service';
import { HttpClientModule } from '@angular/common/http';
import { AddPizzaComponent } from './add-pizza/add-pizza.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PricePipe } from './price.pipe';
import { EditPizzaComponent } from './edit-pizza/edit-pizza.component';
import { RouterModule, Routes } from '@angular/router'; // Import RouterModule for routes
const routes: Routes = [
  { path: 'edit-pizza/:id', component: EditPizzaComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PizzaAppComponent,
    NavbarComponent,
    AddPizzaComponent,
    PricePipe,
    EditPizzaComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes), 
  ],
  bootstrap: [AppComponent],
  providers: [PizzaService],
})
export class AppModule {}
