import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Camera, MyScreen } from 'src/render/projection';
import { RendererService } from '../renderer.service';
import { Hex } from 'src/render/drawable';
import { vec2 } from 'src/render/math';
import { CollisionService } from '../collision.service';
import { HexSelectorService } from '../hex-selector.service';
import { TerrainService } from '../terrain.service';

@Component({
  selector: 'app-hex-map',
  templateUrl: './hex-map.component.html',
  styleUrls: ['./hex-map.component.css']
})
export class HexMapComponent implements OnInit, AfterViewInit {
  @ViewChild("myCanvas", { static: true }) myCanvas?: ElementRef<HTMLCanvasElement>;

  // rendering stuff
  ctx: CanvasRenderingContext2D | null = null;
  cam: Camera = new Camera();
  screen?: MyScreen;
  hexes: Hex[] = [];

  // grid info
  numColumns: number = 50;
  numRows: number = 30;

  // mouse dragging stuff
  mouseDown: vec2 = { x: 0, y: 0};
  isMousePressed: boolean = false;
  inMove: boolean = false;
  lastMove: vec2 = { x: 0, y: 0 };


  constructor(private renderer: RendererService,
              private terrainSelector: TerrainService,
              private collider: CollisionService,
              private selector: HexSelectorService) {
    for (let col = 0; col < this.numColumns; col++) {
      for (let row = 0; row < this.numRows; row++) {
        let hex = new Hex();
        hex.center = {
          x: col * 1.5 - 49,
          y: (2 * row + col % 2) * Math.sin(Math.PI / 3) - 39
        };
        this.hexes.push(hex);
      }
    }
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    if (!this.myCanvas) return;
    console.log('IN INIT')
    this.ctx = this.myCanvas.nativeElement.getContext("2d");
    this.screen = new MyScreen(this.myCanvas.nativeElement.width, this.myCanvas.nativeElement.height);
    if (!this.ctx) return;
    console.log('GOT THE CONTEXT BOI');
    this.hexes.forEach(element => {
      if (!this.ctx || !this.screen) return;
      this.renderer.draw(this.ctx, element, this.cam, element.selected, this.screen, element.color);
    });
  }

  onMouseDown(event: MouseEvent): void {
    console.log('Mouse clicked! x: ' + event.offsetX + ' y: ' + event.offsetY);
    //this.mouseDown = { x: event.offsetX, y: event.offsetY};
    //this.isMousePressed = true;
  }

  onMouseUp(event: MouseEvent): void {
    console.log('Mouse Unclicked! x: ' + event.offsetX + ' y: ' + event.offsetY);

    let changed: boolean = false;
    if (Math.sqrt(this.mouseDown.x * this.mouseDown.x + this.mouseDown.y * this.mouseDown.y) > 4) return;
    for (let i = 0; i < this.hexes.length; i++) {
      if (this.collider.checkCircleCollision(this.hexes[i].center, this.hexes[i].scale,
        this.cam.fromCameraSpace(this.screen!.fromPixelSpace({ x: event.offsetX, y: event.offsetY })))) {
        this.hexes[i].color = this.terrainSelector.getSelectedColor();
        console.log('Hex[' + i + '] selected!');
        changed = true;
      }
    }
   
    if (changed) {
      this.ctx?.clearRect(0, 0, this.screen!.dimensions.x, this.screen!.dimensions.y);
      this.hexes.forEach(element => {
        if (!this.ctx || !this.screen) return;
        this.renderer.draw(this.ctx, element, this.cam, element.selected, this.screen, element.color);
      });
    }

    //this.isMousePressed = false;
    //this.inMove = false;
  }

  onMouseMove(event: MouseEvent): void {
    /*if (Math.sqrt(this.mouseDown.x * this.mouseDown.x + this.mouseDown.y * this.mouseDown.y) < 4 || !this.isMousePressed) return;
    if (!this.inMove) {
      this.inMove = true;
      this.lastMove = { x: event.offsetX, y: event.offsetY}
      return;
    }
    this.cam.pos = this.cam.fromCameraSpace(this.screen!.fromPixelSpace({ x: event.offsetX - this.lastMove.x, y: event.offsetY - this.lastMove.y}));
    this.ctx?.clearRect(0, 0, this.screen!.dimensions.x, this.screen!.dimensions.y);
    this.hexes.forEach(element => {
      if (!this.ctx || !this.screen) return;
      this.renderer.draw(this.ctx, element, this.cam, this.screen, element.selected, element.color);
    });*/
  }
}
