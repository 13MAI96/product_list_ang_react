import { Component, input } from '@angular/core';
import { ListedProduct } from '../../models/listed_product';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.scss',
  standalone: true
})
export class Card {
  product = input.required<ListedProduct>()
}
