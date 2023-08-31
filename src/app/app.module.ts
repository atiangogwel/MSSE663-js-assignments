import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PizzaAppComponent } from './pizza-app/pizza-app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, HomeComponent, PizzaAppComponent],
  imports: [BrowserModule, AppRoutingModule], // Import the AppRoutingModule
  bootstrap: [AppComponent],
})
export class AppModule {}
