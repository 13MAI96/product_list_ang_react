import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api-service';
import { DetailedProduct } from '../../models/detailed_product';
import { Star } from '../star/star';

@Component({
  selector: 'app-product',
  imports: [Star],
  templateUrl: './product.html',
  styleUrl: './product.scss'
})
export class Product {
  private product_id: number
  private route: ActivatedRoute = inject(ActivatedRoute)
  private router: Router = inject(Router)
  private apiService: ApiService = inject(ApiService)
  public product = signal<DetailedProduct | null>(null)
  public stars: {class: string}[] = [] 

  constructor(
  ){
    this.product_id = Number(this.route.snapshot.paramMap.get('id')) ?? 0
    this.apiService.getProductById(this.product_id).subscribe((response: DetailedProduct) => {
      this.product.set(response)
      const stars_array = []
      for (let index = 1; index <= 5; index++) {
        stars_array.push({class: response.rating.rate < index ? 'basic' : 'checked'})
      }
      this.stars = stars_array
    })
  }

  public goHome = () => {
    this.router.navigate([''])
  }

}
