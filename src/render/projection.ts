import { vec2 } from "./math";

export class Camera {
  pos: vec2;
  scale: number;

  constructor() {
    this.pos = { x: 0, y: 0};
    this.scale = 1;
  }

  toCameraSpace(v: vec2, scale: number): vec2 {
    return {
      x: (v.x * scale - this.pos.x) * this.scale,
      y: (v.y * scale - this.pos.y) * this.scale
    };
  }

  fromCameraSpace(v: vec2): vec2 {
    return {
      x: v.x / this.scale + this.pos.x,
      y: v.y / this.scale + this.pos.y
    };
  }
}

export class MyScreen {
  dimensions: vec2;
  aspect_ratio: number;
  // number of hexes to render in both x and y (assuming aspect ratio = 1)
  hexes_rendered: number = 40;
  
  constructor(width: number, height: number) {
    this.dimensions = { x: width, y: height};
    this.aspect_ratio = width / height;
  }

  toPixelSpace(v: vec2, scale: number): vec2 {
    return {
      x: (v.x * scale / this.aspect_ratio + this.hexes_rendered) / (this.hexes_rendered * 2) * this.dimensions.x,
      y: (v.y * scale + this.hexes_rendered) / (this.hexes_rendered * 2) * this.dimensions.y
    }
  }

  fromPixelSpace(v: vec2): vec2 {
    return {
      x: (v.x * ((this.hexes_rendered * 2) / this.dimensions.x) - this.hexes_rendered) * this.aspect_ratio,
      y: v.y * ((this.hexes_rendered * 2) / this.dimensions.y) - this.hexes_rendered
    };
  }
}
