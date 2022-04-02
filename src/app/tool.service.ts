import { EventEmitter, Injectable } from '@angular/core';
import { tool } from './dnd/tools';

@Injectable({
  providedIn: 'root'
})
export class ToolService{
  tool: string = '';
  constructor() {
    
  }


}
