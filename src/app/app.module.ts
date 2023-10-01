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
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';
import { PricePipe } from './price.pipe';

@NgModule({
  declarations: [AppComponent, HomeComponent, PizzaAppComponent, NavbarComponent, AddPizzaComponent, PricePipe,],
  imports: [BrowserModule,StoreModule,FormsModule,ReactiveFormsModule, AppRoutingModule,HttpClientModule, FormsModule], // Import the AppRoutingModule
  bootstrap: [AppComponent],
  providers: [PizzaService]
})
export class AppModule {}
