import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tool-selector-button',
  templateUrl: './tool-selector-button.component.html',
  styleUrls: ['./tool-selector-button.component.css']
})
export class ToolSelectorButtonComponent implements OnInit {
  @Input() selectorName?: string;
  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
    console.log("In " + this.selectorName + " selector!");
  }

}
