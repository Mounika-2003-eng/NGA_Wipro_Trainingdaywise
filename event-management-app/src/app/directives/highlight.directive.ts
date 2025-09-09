import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {
  @Input('appHighlight') price!: number;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    if (this.price > 2000) {
      this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'lightgoldenrodyellow');
      this.renderer.setStyle(this.el.nativeElement, 'fontWeight', '600');
    }
  }
}
