import {Component, OnInit} from '@angular/core';
import {Product} from "./models/product";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  products: Product[] = [];
  total = 128000000000;
  balance = 128000000000;

  ngOnInit() {
    this.products.push({name: 'Big Mac', price: 2,quantity:0});
    this.products.push({name: 'Flip Flops', price: 3,quantity:0});
    this.products.push({name: 'Coca-Cola Pack', price: 5,quantity:0});
    this.products.push({name: 'Movie Ticket', price: 12,quantity:0});
    this.products.push({name: 'Book', price: 15,quantity:0});
    this.products.push({name: 'Lobster Dinner', price: 45,quantity:0});
    this.products.push({name: 'Video Game', price: 60,quantity:0});
    this.products.push({name: 'Amazon Echo', price: 99,quantity:0});
    this.products.push({name: 'Year of Netflix', price: 100,quantity:0});
    this.products.push({name: 'Air Jordans', price: 125,quantity:0});
    this.products.push({name: 'Airpods', price: 199,quantity:0});
    this.products.push({name: 'Gaming Console', price: 299,quantity:0});
    this.products.push({name: 'Drone', price: 350,quantity:0});
    this.products.push({name: 'Smartphone', price: 699,quantity:0});
    this.products.push({name: 'Bike', price: 800,quantity:0});
    this.products.push({name: 'Kitten', price: 1500,quantity:0});
    this.products.push({name: 'Puppy', price: 1500,quantity:0});
    this.products.push({name: 'Auto Rickshaw', price: 2300,quantity:0});
    this.products.push({name: 'Horse', price: 2500,quantity:0});
    this.products.push({name: 'Acre of Farmland', price: 3000,quantity:0});
    this.products.push({name: 'Designer Handbag', price: 5500,quantity:0});
    this.products.push({name: 'Hot Tub', price: 6000,quantity:0});
    this.products.push({name: 'Luxury Wine', price: 7000,quantity:0});
    this.products.push({name: 'Diamond Ring', price: 10000,quantity:0});
    this.products.push({name: 'Jet Ski', price: 12000,quantity:0});
    this.products.push({name: 'Rolex', price: 15000,quantity:0});
    this.products.push({name: 'Ford F-150', price: 30000,quantity:0});
    this.products.push({name: 'Tesla', price: 75000,quantity:0});
    this.products.push({name: 'Monster Truck', price: 150000,quantity:0});
    this.products.push({name: 'Ferrari', price: 250000,quantity:0});
    this.products.push({name: 'Single Family Home', price: 300000,quantity:0});
    this.products.push({name: 'Gold Bar', price: 700000,quantity:0});
    this.products.push({name: 'McDonalds Franchise', price: 1500000,quantity:0});
    this.products.push({name: 'M1 Abrams', price: 5250000,quantity:0});
    this.products.push({name: 'Yacht', price: 7500000,quantity:0});
    this.products.push({name: 'Superbowl Ad', price: 8000000,quantity:0});
    this.products.push({name: 'Formula 1 Car', price: 15000000,quantity:0});
    this.products.push({name: 'Apache Helicopter', price: 31000000,quantity:0});
    this.products.push({name: 'Mansion', price: 45000000,quantity:0});
    this.products.push({name: 'Make a Movie', price: 100000000,quantity:0});
    this.products.push({name: 'Boeing 747', price: 148000000,quantity:0});
    this.products.push({name: 'Mona Lisa', price: 780000000,quantity:0});
    this.products.push({name: 'Skyscraper', price: 850000000,quantity:0});
    this.products.push({name: 'Cruise Ship', price: 930000000,quantity:0});
    this.products.push({name: 'NBA Team', price: 2100000000,quantity:0});
  }

  cartEvent(product: Product,type:string) {
    if (type == 'buy') {
      if (this.balance >= product.price) {
        this.balance -= product.price;
        product.quantity++;
      }
    }else {
      if (product.quantity > 0) {
        this.balance += product.price;
        product.quantity--;
      }
    }
  }
}
