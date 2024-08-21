import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent {
  @Input() product?: any;
  @Output() addToCart = new EventEmitter<any>();
  //method
  onAddToCart(){
    this.addToCart.emit(this.product);
  }
}
