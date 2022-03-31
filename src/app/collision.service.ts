import { Injectable } from '@angular/core';
import { Hex } from 'src/render/drawable';
import { vec2 } from 'src/render/math';

@Injectable({
  providedIn: 'root'
})
export class CollisionService {

  constructor() { }

  checkHexCollision(hex: Hex, v: vec2): boolean {

    return false;
  }

  checkRectangleCollision(a: vec2, b: vec2, c: vec2, d: vec2, v: vec2): boolean {

    return false;
  }

  checkTriangleCollision(a: vec2, b: vec2, c: vec2, v: vec2): boolean {
    
    return false;
  }

  checkCircleCollision(center: vec2, radius: number, v: vec2): boolean {
    let v_c: vec2 = { x: v.x - center.x, y: v.y - center.y };
    if (Math.sqrt(Math.pow(v_c.x, 2) + Math.pow(v_c.y, 2)) < radius) return true;
    return false;
  }
}
