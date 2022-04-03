export enum tool {
  HS_TERRAIN,
  HS_LOCATIONS,
  HS_ENTRIES,
  HS_NOTOOL,
}

export type tool_key = keyof typeof tool;