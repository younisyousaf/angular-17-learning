import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductDetailComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  cartItems: any = [];
  products = [
    {
      id: 1,
      name: 'Phone XL',
      price: 799,
      description: 'A large phone with one of the best screens',
    },
    {
      id: 2,
      name: 'Phone Mini',
      price: 699,
      description: 'A great phone with one of the best cameras',
    },
    {
      id: 3,
      name: 'Phone Standard',
      price: 299,
      description: 'A great phone with one of the best cameras',
    },
  ];
  onProductAddedToCart(product: any) {
    console.log('Product Added to Cart: ' + product.name);
    this.cartItems.push(product);
    console.log(this.cartItems);
  }
}
