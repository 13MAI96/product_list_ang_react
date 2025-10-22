import { Injectable, ViewContainerRef } from '@angular/core';
import { Tooltip } from '../components/tooltip/tooltip';


@Injectable({
  providedIn: 'root'
})
export class TooltipService {
  private containerRef!: ViewContainerRef
  
  constructor(){}

  public setContainer = (conatiner: ViewContainerRef) => {
    this.containerRef = conatiner
  }

  public notify = (message: string) => {
    if(this.containerRef){
        const tooltipRef = this.containerRef.createComponent(Tooltip)
        tooltipRef.instance.message = message
        setTimeout(()=>{
            tooltipRef.destroy()
        }, 2000)
    }
    console.log(this.containerRef)
  }
}
