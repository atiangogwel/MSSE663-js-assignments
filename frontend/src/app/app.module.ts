import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PizzaAppComponent } from './pizza-app/pizza-app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, PizzaAppComponent, NavbarComponent],
  imports: [BrowserModule, AppRoutingModule], // Import the AppRoutingModule
  bootstrap: [AppComponent],
})
export class AppModule {}
