import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ListedProduct } from '../models/listed_product';
import { BehaviorSubject, Observable } from 'rxjs';
import { DetailedProduct } from '../models/detailed_product';
import { TooltipService } from './tooltip.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl: string = 'https://fakestoreapi.com/products'
  private http = inject(HttpClient);
  private tooltip = inject(TooltipService)

  private product_list: ListedProduct[] = []
  public filtered_products: BehaviorSubject<ListedProduct[]> = new BehaviorSubject<ListedProduct[]>([])
  public spinner: BehaviorSubject<boolean> = new BehaviorSubject(false)

  public getProductList = () => {
    this.changeSpinnerStatus(true)
    this.http.get<ListedProduct[]>(`${this.apiUrl}`).subscribe({
      next: (response) => {
        this.product_list = response
        this.filtered_products.next(response)
        this.changeSpinnerStatus(false)
      }, error: (err) => {
        console.error(err)
        this.tooltip.notify("An error occurred while retrieving the list of products..")
      }
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

  public changeSpinnerStatus = (status: boolean | undefined = undefined) => {
    if(status){
      this.spinner.next(status)
    } else {
      this.spinner.next(!this.spinner.value)
    }
  }
  
}
