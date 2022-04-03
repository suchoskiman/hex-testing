import { Component, OnInit, Input } from '@angular/core';
import { terrain, terrain_key } from '../../dnd/terrains';
import { TerrainService } from '../terrain.service';

@Component({
  selector: 'app-terrain-selector-button',
  templateUrl: './terrain-selector-button.component.html',
  styleUrls: ['./terrain-selector-button.component.css']
})
export class TerrainSelectorButtonComponent implements OnInit {
  @Input() name: string = 'None';
  @Input() terrainType: terrain_key = 'TR_NONE';

  constructor(private terrainSelector: TerrainService) { }

  ngOnInit(): void {
  }

  onClick(): void {
    console.log('Terrain selected: ' + this.terrainType);
    this.terrainSelector.select(terrain[this.terrainType]);
  }
}
