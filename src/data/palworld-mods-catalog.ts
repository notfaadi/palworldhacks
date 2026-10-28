export interface ModCatalogRow {
  name: string;
  type: string;
  patch: string;
  summary: string;
}

export const palworldModsCatalog: ModCatalogRow[] = [
  {
    name: 'Performance Optimizer',
    type: 'QoL / FPS',
    patch: '1.0.5',
    summary: 'Reduces stutter in large bases on Windows 10/11 — install before cheat mods.',
  },
  {
    name: 'Map Unlock & Waypoints',
    type: 'QoL',
    patch: '1.0.5',
    summary: 'Reveals fog of war locally; pair with teleport docs on private worlds only.',
  },
  {
    name: 'Breeding Calculator UI',
    type: 'Breeding',
    patch: '1.0.5',
    summary: 'Shows Pal passives and cake math without editing save data.',
  },
  {
    name: 'Base Snap Extensions',
    type: 'Base building',
    patch: '1.0.5',
    summary: 'Finer placement for Palbox layouts and conveyor lines.',
  },
  {
    name: 'Inventory Sorter',
    type: 'QoL',
    patch: '1.0.5',
    summary: 'Stack management for sphere grinding — no item spawning.',
  },
  {
    name: 'Pal Spawn Info',
    type: 'Info',
    patch: '1.0.5',
    summary: 'In-world labels for spawn zones and boss timers.',
  },
  {
    name: 'Cheat Training Module (offline)',
    type: 'Cheat-adjacent',
    patch: '1.0.5',
    summary: 'Practice god mode toggles offline — not for official servers.',
  },
];
