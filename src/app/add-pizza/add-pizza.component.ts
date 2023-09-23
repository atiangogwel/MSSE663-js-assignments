import { Component } from '@angular/core';
import { PizzaService } from '../pizza.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-pizza',
  templateUrl: './add-pizza.component.html',
  styleUrls: ['./add-pizza.component.scss']
})
export class AddPizzaComponent {
  pizzaName: string = '';
  pizzaDescription: string = '';
  pizzaPrice: number = 0;

  constructor(private pizzaService: PizzaService, private router: Router) {}

  onSubmit() {
    const newPizza = {
      name: this.pizzaName,
      description: this.pizzaDescription,
      price: this.pizzaPrice
    };

    this.pizzaService.addPizza(newPizza).subscribe((response) => {
      console.log('Pizza added:', response);
      // Reset form fields
      this.pizzaName = '';
      this.pizzaDescription = '';
      this.pizzaPrice = 0;

      alert('Pizza added successfully');
      // Redirect to the "pizzas" page
      this.router.navigate(['/pizzas']);
    });
  }
}
