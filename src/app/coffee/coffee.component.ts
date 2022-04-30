import { Component, OnInit } from '@angular/core';
import { Coffee } from './coffee';
import { CoffeeService } from './coffee.service';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.css']
})
export class CoffeeComponent implements OnInit {

  coffees!: Array<Coffee>;
  coffee!: Coffee;
  origen: number = 0;
  blend: number = 0;

  constructor(private coffeeService: CoffeeService) { }

  getCoffeesList() {
    this.coffeeService.getCoffees().subscribe(coffees => {
      this.coffees = coffees;
      this.coffees.forEach(coffee => {
        this.coffee = coffee;
        if(coffee.tipo === 'Café de Origen') {
          this.origen += 1;
        }
        else if(coffee.tipo === 'Blend') {
          this.blend += 1;
        }
      });
    });
  }

  ngOnInit() {
    this.getCoffeesList();
  }

}
