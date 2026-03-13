import { Component } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-catalog',
  imports: [ProductCard, FormsModule],
  templateUrl: './catalog.html',
  styleUrl: './catalog.css',
})
export class Catalog {

   searchTerm: string = '';
}
