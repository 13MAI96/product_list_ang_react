import { Component, inject } from '@angular/core';
import { ApiService } from '../../services/api-service';
import { Card } from '../card/card'
import { AsyncPipe } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Spinner } from '../spinner/spinner';

@Component({
  selector: 'app-home',
  imports: [Card, AsyncPipe, ReactiveFormsModule, Spinner],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  public search_text: FormControl = new FormControl('')
  public apiService: ApiService = inject(ApiService)


  constructor(
    
  ){
    this.apiService.getProductList()
    this.search_text.valueChanges.subscribe((text: string) => {
      this.apiService.filterByText(text)
    })
  }
}
