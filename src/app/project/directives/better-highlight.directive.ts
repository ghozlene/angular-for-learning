import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

  @Input() defaultBackgroundColor: string = '';
  @Input() customBackgroundColor: string = '';
  @HostListener('mouseenter') mouseover(eventData: Event) {
    /* this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');*/
    this.backgroundColor = this.defaultBackgroundColor;
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    /* this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');*/

    this.backgroundColor = this.customBackgroundColor;

  }
  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.backgroundColor = this.defaultBackgroundColor;
  }
}
