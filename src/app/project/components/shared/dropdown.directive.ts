import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('attr.data-bs-toggle') toggleAttr: string | null = 'dropdown';

  @Input() set appDropdownToggle(value: boolean) {
    this.toggleAttr = value ? 'dropdown' : null;
  }

  constructor() {
    // Default value
    this.toggleAttr = 'dropdown';
  }

}
