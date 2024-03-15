import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core'; // Import SimpleChanges, not SimpleChange
import { Colors } from '../Enum/colors';

@Directive({
  selector: '[appProducthighlight]',
  standalone: true
})

export class ProducthighlightDirective {
  @Input() searchText: string = '';

  @HostListener('mouseover') onMouseOver() {
    this.elementRef.nativeElement.style.boxShadow =
      'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px';
    this.elementRef.nativeElement.style.transition = '1s';
    this.elementRef.nativeElement.style.transform = 'translate(10px)';
  }
  @HostListener('mouseout') onMouseOut() {
    this.elementRef.nativeElement.style.boxShadow = 'none';
    this.elementRef.nativeElement.style.transform = 'scale(1)';
  }



  // ngOnChanges(changes: SimpleChanges): void {
  //   if (changes['searchText']) {
  //     this.highlightText(this.elementRef.nativeElement.innerText);
  //   }
  // }
  // private highlightText(text: string): void {
  //   if (!this.searchText) {
  //     this.elementRef.nativeElement.innerHTML = text;
  //     return;
  //   }
  //   const regex = new RegExp(this.searchText, 'gi');
  //   const highlightedText = text.replace(regex, match => `<span class="highlight">${match}</span>`);
  //   this.elementRef.nativeElement.innerHTML = highlightedText;
  // }




  addBorder(
    color: string,
    borderType: string = 'solid',
    borderWidth: string = '2px'
  ) {
    this.elementRef.nativeElement.style.border = `${borderWidth} ${borderType} ${color}`;
  }
  @Input() set appHighlight(value: number) {
    if (value == 1) {
      this.addBorder(Colors.taha, 'dashed');
    } else if (value == 2) {
      this.addBorder(Colors.atef);
    } else if (value == 0) {
      this.addBorder(Colors.sherif,'solid');
    } else {
      this.addBorder('black');
    }
  }
  constructor(private elementRef: ElementRef) {
  }
}
