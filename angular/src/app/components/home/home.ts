import { Component } from '@angular/core';
import { ApiService } from '../../services/api-service';
import { Card } from '../card/card'
import { AsyncPipe } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [Card, AsyncPipe, ReactiveFormsModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  public search_text: FormControl = new FormControl('')


  constructor(
    public apiService: ApiService
  ){
    this.apiService.getProductList()
    this.apiService.getProductById(1).subscribe((response) => {
      console.log(response)
    })
    this.search_text.valueChanges.subscribe((text: string) => {
      this.apiService.filterByText(text)
    })
  }
}
