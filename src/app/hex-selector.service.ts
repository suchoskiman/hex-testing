import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HexSelectorService {
  private index: number = -1;
  constructor() { }

  select(i: number): void {
    this.index = i;
  }

  getIndex(): number {
    return this.index;
  }
}
