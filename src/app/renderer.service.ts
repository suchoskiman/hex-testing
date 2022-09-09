import { Injectable, ɵSWITCH_VIEW_CONTAINER_REF_FACTORY__POST_R3__ } from '@angular/core';
import { Camera, MyScreen } from 'src/render/projection';
import { Drawable } from '../render/drawable';
import { vec2 } from 'src/render/math';

@Injectable({
  providedIn: 'root'
})
export class RendererService {

  constructor() { }

  draw(ctx: CanvasRenderingContext2D, obj: Drawable, cam: Camera, sel: boolean, screen: MyScreen, color: string): void {
    //console.log('IN DRAW');

    let verts = obj.getVertices();
    
    // drawing hex
    let start = screen.toPixelSpace(cam.toCameraSpace(verts[0], obj.getScale()), cam.scale);
    let working: vec2;
    ctx.beginPath();
    ctx.moveTo(start.x, start.y);
    for (let i = 0; i < obj.getNumVertices(); i++) {
      working = screen.toPixelSpace(cam.toCameraSpace(verts[i], obj.getScale()), cam.scale);
      ctx.lineTo(working.x, working.y);
    }
    ctx.lineTo(start.x, start.y);
    ctx.closePath();
    //console.log('\thex is rendering ' + color);
    ctx.fillStyle = color;
    ctx.fill();
    if (sel) ctx.strokeStyle = 'Red';
    ctx.stroke();
    ctx.strokeStyle = 'black';
  }
}
