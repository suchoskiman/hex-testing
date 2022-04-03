import { vec2 } from "./math";

export interface Drawable {
  getVertices(): vec2[];
  getNumVertices(): number;
  getScale(): number;
}

export class Hex implements Drawable {
  // 2d info
  center: vec2;
  scale: number;
  vertices: vec2[] = [];
  num_verts: number = 6;

  // drawing and state info
  color: string = 'White';
  selected: boolean = false;

  constructor() {
    this.center = { x: 0, y: 0};
    this.scale = 1;

    for (let i = 0; i < this.num_verts; i++) {
      let angle = i * 60 * Math.PI / 180;
      this.vertices.push({ x: Math.cos(angle), y: Math.sin(angle)});
    }
  }

  getVertices(): vec2[] {
    let new_verts: vec2[] = [];
    for (let i = 0; i < this.num_verts; i++) {
      let vert: vec2 = new vec2();
      vert.x = this.center.x + this.vertices[i].x;
      vert.y = this.center.y + this.vertices[i].y;
      new_verts.push(vert);
    }
    return new_verts;
  }

  getNumVertices(): number {
    return this.num_verts;
  }

  getScale(): number {
    return this.scale;
  }
}