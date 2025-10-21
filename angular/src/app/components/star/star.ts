import { Component, input } from '@angular/core';

@Component({
  selector: 'app-star',
  imports: [],
  templateUrl: './star.html',
  styleUrl: './star.scss',
  standalone: true
})
export class Star {
  class = input.required<string>()
}
