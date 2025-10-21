import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ListedProduct } from '../models/listed_product';
import { BehaviorSubject, Observable } from 'rxjs';
import { DetailedProduct } from '../models/detailed_product';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl: string = 'https://fakestoreapi.com/products'
  private http = inject(HttpClient);

  private product_list: ListedProduct[] = []
  public filtered_products: BehaviorSubject<ListedProduct[]> = new BehaviorSubject<ListedProduct[]>([])

  public getProductList = () => {
    this.http.get<ListedProduct[]>(`${this.apiUrl}`).subscribe((response) => {
      this.product_list = response
      this.filtered_products.next(response)
    })
  }

  public filterByText = (text: string) => {
    const filtered = this.product_list.filter((product) => {
      return product.title.toLowerCase().indexOf(text.toLowerCase()) > -1 || product.category.toLowerCase().indexOf(text.toLowerCase()) > -1
    })
    this.filtered_products.next(filtered)
  }

  public getProductById = (id: number): Observable<DetailedProduct> => {
    return this.http.get<DetailedProduct>(`${this.apiUrl}/${id}`)
  }
  
}
