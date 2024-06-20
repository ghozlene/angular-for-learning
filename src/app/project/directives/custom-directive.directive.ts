import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective {

  @Input() set appCustomDirective(value: boolean) {
    if (value) {
      this.vcRef.createEmbeddedView(this.templateRef);

    } else {
      this.vcRef.clear();
    }
  }
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
