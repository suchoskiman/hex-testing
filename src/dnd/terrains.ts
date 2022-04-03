export enum terrain {
  TR_ARCTIC,
  TR_COAST,
  TR_DESERT,
  TR_FOREST,
  TR_GRASSLAND,
  TR_MOUNTAIN,
  TR_SWAMP,
  TR_NONE,
}

export type terrain_key = keyof typeof terrain;