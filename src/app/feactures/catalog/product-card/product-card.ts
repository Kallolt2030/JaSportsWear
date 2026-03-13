import { Component, Input } from '@angular/core';
import { Product, PRODUCTS, ProductType } from '../pages/products.data';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-product-card',
  imports: [NgFor],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {

  @Input() type?: ProductType;
  @Input() featuredOnly = false;
  @Input() search: string = '';
  @Input() sort: string = '';   // 👈 nuevo

  products: Product[] = PRODUCTS;

  get filteredProducts(): Product[] {

    let result = [...this.products];

    // filtro por tipo
    if (this.type) {
      result = result.filter(p => p.type === this.type);
    }

    // filtro por destacados
    if (this.featuredOnly) {
      result = result.filter(p => p.featured);
    }

    // filtro por búsqueda
    if (this.search && this.search.trim() !== '') {
      const term = this.search.toLowerCase();

      result = result.filter(p =>
        p.name.toLowerCase().includes(term) ||
        p.brand?.toLowerCase().includes(term) ||
        p.category?.toLowerCase().includes(term)
      );
    }

    // ORDENAMIENTO
    if (this.sort === 'nameAsc') {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }

    if (this.sort === 'nameDesc') {
      result.sort((a, b) => b.name.localeCompare(a.name));
    }

    if (this.sort === 'priceAsc') {
      result.sort((a, b) => a.price - b.price);
    }

    if (this.sort === 'priceDesc') {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }

  setDefaultImage(event: any) {
    event.target.src = 'assets/default.png';
  }

}