import { Component, OnInit } from '@angular/core';
import { tool, tool_key } from '../../dnd/tools';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  selectedTool: tool = tool.HS_TERRAIN;
  toolList: string[] = ['terrain', 'locations', 'entries'];
  constructor() { }

  ngOnInit(): void {
  }

  onToolSelected(value: tool): void {
    console.log("[TOOLBAR] Got Event: " + value);
    this.selectedTool = value;
  }
}
