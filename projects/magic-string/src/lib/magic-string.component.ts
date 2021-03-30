import { ElementRef, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'ky-magic-string',
  template: `
    <input type="text" (keydown.enter)="markText($event.target.value)" />
    <div #content [hidden]="true">
        <ng-content></ng-content>
    </div>
    <div [innerHtml]="controlledContent"></div>
  `,
  styles: [
    `
    .mark{
      background-color:yellow;
    }
    `
  ],
  encapsulation: ViewEncapsulation.None
})
export class MagicStringComponent implements OnInit {

  @ViewChild('content', {static: true}) content: ElementRef;

  originalContent: String;
  controlledContent: String;

  ngOnInit(): void {
    this.controlledContent = this.originalContent = this.content.nativeElement.textContent;
  }
  markText(value: any){
    console.log(value)
    this.controlledContent = this.originalContent;
    console.log(this.controlledContent = this.originalContent)
    this.controlledContent = this.originalContent.replace(
      new RegExp(value, 'g'),
      `<span class="mark">${value}</span>`)
  }
}
