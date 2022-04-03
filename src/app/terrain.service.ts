import { Injectable } from '@angular/core';
import { terrain, terrain_key } from 'src/dnd/terrains';

class TerrainColor {
  mTerrain: terrain = terrain.TR_NONE;
  mColor: string = 'White';
  constructor() { }
}

@Injectable({
  providedIn: 'root'
})
export class TerrainService {
  selectedTerrain: terrain = terrain.TR_NONE;
  constructor() { }
  
  // at somepoint change this to pull options from a config file
  private terrainColorMap: TerrainColor[] = [
    { mTerrain: terrain.TR_ARCTIC, mColor: 'SkyBlue'},
    { mTerrain: terrain.TR_COAST, mColor: 'BurlyWood' },
    { mTerrain: terrain.TR_DESERT, mColor: 'Coral' },
    { mTerrain: terrain.TR_FOREST, mColor: 'DarkOliveGreen' },
    { mTerrain :terrain.TR_GRASSLAND, mColor: 'DarkKhaki' },
    { mTerrain: terrain.TR_MOUNTAIN, mColor: 'DarkSlateGray' },
    { mTerrain: terrain.TR_SWAMP, mColor: 'SeaGreen' },
  ];

  select(ter: terrain): void {
    this.selectedTerrain = ter;
  }

  get(): terrain {
    return this.selectedTerrain;
  }

  getSelectedColor(): string {
    for (let i = 0; i < this.terrainColorMap.length; i++) {
      if (this.terrainColorMap[i].mTerrain === this.selectedTerrain) {
        return this.terrainColorMap[i].mColor;
      }
    }
    return 'White';
  }

  getMappedColor(ter: terrain): string {
    for (let i = 0; i < this.terrainColorMap.length; i++) {
      if (this.terrainColorMap[i].mTerrain === ter) {
        return this.terrainColorMap[i].mColor;
      }
    }
    return 'White';
  }
}
