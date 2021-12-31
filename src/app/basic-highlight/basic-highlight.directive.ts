import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
  selector: "[appBasicHighlight]",
})
export class BasicHighlightDirective implements OnInit {
  constructor(private elementRef: ElementRef) {} //add 'private' keyword to make the elementRef varible globally accessible.

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = "green";
  }
}
