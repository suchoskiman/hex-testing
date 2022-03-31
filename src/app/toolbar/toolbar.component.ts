import { Component, OnInit } from '@angular/core';
import { tools } from '../dnd/tools';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  private selectedTool: tools = tools.HS_TERRAIN;
  constructor() { }

  ngOnInit(): void {
  }

}
