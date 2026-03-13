import { Component } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-clothes',
  imports: [ProductCard, FormsModule],
  templateUrl: './clothes.html',
  styleUrl: './clothes.css',
})
export class Clothes {
  sortClothes: string = '';
  sortArticles: string = '';
}
