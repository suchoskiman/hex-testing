import { Injectable } from '@angular/core';
import { tools } from './dnd/tools';

@Injectable({
  providedIn: 'root'
})
export class ToolService {
  toolList?: tools[];
  constructor() {
    
  }
}
