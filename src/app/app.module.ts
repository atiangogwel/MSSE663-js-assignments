import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PizzaAppComponent } from './pizza-app/pizza-app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { PizzaService } from './services/pizza.service';
import { HttpClientModule } from '@angular/common/http';
import { AddPizzaComponent } from './add-pizza/add-pizza.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, HomeComponent, PizzaAppComponent, NavbarComponent, AddPizzaComponent],
  imports: [BrowserModule, AppRoutingModule,HttpClientModule, FormsModule], // Import the AppRoutingModule
  bootstrap: [AppComponent],
})
export class AppModule {}
