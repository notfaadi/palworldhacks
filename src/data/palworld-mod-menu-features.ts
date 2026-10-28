export interface ModMenuFeatureRow {
  feature: string;
  description: string;
  risk: string;
}

export const modMenuFeatures: ModMenuFeatureRow[] = [
  {
    feature: 'Player ESP',
    description: 'Boxes, names and distance for raiders near your base.',
    risk: 'Visible on streams unless capture-safe mode is enabled.',
  },
  {
    feature: 'Pal ESP',
    description: 'Highlight bosses, breeding stock and wild spawns through terrain.',
    risk: 'High behavioral signal on official co-op — use private servers.',
  },
  {
    feature: 'Loot ESP',
    description: 'Sphere, ore and dungeon chest filters with distance sorting.',
    risk: 'Low on solo worlds; moderate when farming with strangers online.',
  },
  {
    feature: 'Teleport',
    description: 'Jump to map pins, towers or guild bases instantly.',
    risk: 'Can desync co-op clients if host and guest both teleport.',
  },
  {
    feature: 'Speed hack',
    description: 'Movement multiplier for traversal and mount testing.',
    risk: 'Physics glitches on 1.0.5 — toggle off before saving.',
  },
  {
    feature: 'Item spawner UI',
    description: 'Search Palworld item IDs and spawn to inventory offline.',
    risk: 'Save corruption if you stack with cloud sync mid-session.',
  },
  {
    feature: 'No recoil / rapid fire',
    description: 'Combat helpers for PvP base raids on private hosts.',
    risk: 'Easy Anti-Cheat risk on public realms — external overlay only.',
  },
];
