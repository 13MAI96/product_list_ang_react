import { AfterViewInit, Component, inject, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Spinner } from './components/spinner/spinner';
import { ApiService } from './services/api-service';
import { AsyncPipe } from '@angular/common';
import { TooltipService } from './services/tooltip.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Spinner, AsyncPipe],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements AfterViewInit {
  @ViewChild('tooltip', { read: ViewContainerRef, static: true }) public tooltip!: ViewContainerRef;
  public apiService = inject(ApiService)
  private tootipService = inject(TooltipService)

  ngAfterViewInit(): void {
    this.tootipService.setContainer(this.tooltip)
  }
}
