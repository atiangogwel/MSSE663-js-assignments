import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-edit-pizza',
  templateUrl: './edit-pizza.component.html',
  styleUrls: ['./edit-pizza.component.scss']
})
export class EditPizzaComponent implements OnInit {
  editForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private pizzaService: PizzaService
  ) {
    this.editForm = this.formBuilder.group({
      name: [''],
      description: [''],
      price: ['']
    });
  }

  ngOnInit() {
    // Fetch pizza details by ID from the route parameters
    const pizzaId = this.route.snapshot.paramMap.get('id') || '';
    this.pizzaService.getPizzaById(pizzaId).subscribe((pizza: any) => {
      this.editForm.patchValue(pizza);
    });
  }

  onSubmit() {
    const pizzaId = this.route.snapshot.paramMap.get('id') || '';
    this.pizzaService.updatePizza(pizzaId, this.editForm?.value).subscribe(
      () => {
        console.log('Pizza updated successfully');
        alert('Pizza updated successfully');
        this.router.navigate(['/pizzas']);
      },
      (error) => {
        console.error('Error updating pizza:', error);
      }
    );
  }
  goBackToPizzas() {
    this.router.navigate(['/pizzas']);
  }
}
