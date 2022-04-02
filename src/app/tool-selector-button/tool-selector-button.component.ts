import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { tool, tool_key } from '../dnd/tools';

@Component({
  selector: 'app-tool-selector-button',
  templateUrl: './tool-selector-button.component.html',
  styleUrls: ['./tool-selector-button.component.css']
})
export class ToolSelectorButtonComponent implements OnInit {
  @Input() selectorName: string = '';
  @Input() selectorType: tool_key = 'HS_NOTOOL';
  @Output() toolChangeEvent: EventEmitter<tool> = new EventEmitter<tool>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
    console.log("In " + this.selectorName + " selector!");
    this.toolChangeEvent.emit(tool[this.selectorType]);
  }

}
