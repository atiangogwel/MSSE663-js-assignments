import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-pizza-app',
  templateUrl: './pizza-app.component.html',
  styleUrls: ['./pizza-app.component.scss']
})
export class PizzaAppComponent implements OnInit {
  pizzas: any[] = [];

  constructor(private pizzaService: PizzaService) {}

  ngOnInit() {
    this.pizzaService.getPizzas().subscribe((data: any) => {
      this.pizzas = data;
    }, (error) => {
      console.error('Error:', error);
    });
  }
}
