import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  imports: [],
  templateUrl: './tooltip.html',
  styleUrl: './tooltip.scss',
  standalone: true
})
export class Tooltip {
  @Input() message!: string
}
