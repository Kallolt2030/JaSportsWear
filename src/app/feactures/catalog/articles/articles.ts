import { Component } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-articles',
  imports: [ProductCard, FormsModule],
  templateUrl: './articles.html',
  styleUrl: './articles.css',
})
export class Articles {
  sortClothes: string = '';
  sortArticles: string = '';
}
