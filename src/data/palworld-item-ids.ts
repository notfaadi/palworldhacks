/** Representative Palworld item IDs for spawners and admin GiveItem (1.0.5 naming). */
export interface ItemIdRow {
  name: string;
  itemId: string;
  category: string;
}

export const palworldItemIds: ItemIdRow[] = [
  { name: 'Pal Sphere', itemId: 'PalSphere', category: 'Capture' },
  { name: 'Mega Sphere', itemId: 'PalSphere_Mega', category: 'Capture' },
  { name: 'Giga Sphere', itemId: 'PalSphere_Giga', category: 'Capture' },
  { name: 'Hyper Sphere', itemId: 'PalSphere_Hyper', category: 'Capture' },
  { name: 'Ultra Sphere', itemId: 'PalSphere_Ultra', category: 'Capture' },
  { name: 'Legendary Sphere', itemId: 'PalSphere_Legend', category: 'Capture' },
  { name: 'Assault Rifle', itemId: 'AssaultRifle_Default1', category: 'Weapon' },
  { name: 'Pump-Action Shotgun', itemId: 'PumpActionShotgun', category: 'Weapon' },
  { name: 'Rocket Launcher', itemId: 'Launcher_Default', category: 'Weapon' },
  { name: 'Old Bow', itemId: 'Bow_Triple', category: 'Weapon' },
  { name: 'Lifmunk Effigy', itemId: 'Relic', category: 'Stat' },
  { name: 'Ancient Civilization Parts', itemId: 'PalCrystal_Ex', category: 'Crafting' },
  { name: 'Paldium Fragment', itemId: 'Pal_crystal_S', category: 'Crafting' },
  { name: 'Wood', itemId: 'Wood', category: 'Material' },
  { name: 'Stone', itemId: 'Stone', category: 'Material' },
  { name: 'Ingots', itemId: 'CopperIngot', category: 'Material' },
  { name: 'Rifle Ammo', itemId: 'AssaultRifleBullet', category: 'Ammo' },
  { name: 'Shotgun Shells', itemId: 'ShotgunBullet', category: 'Ammo' },
  { name: 'Rocket Ammo', itemId: 'ExplosiveBullet', category: 'Ammo' },
  { name: 'Cake (Breeding)', itemId: 'Cake', category: 'Breeding' },
  { name: 'High Quality Pal Oil', itemId: 'PalOil', category: 'Breeding' },
  { name: 'Jetragon Pal', itemId: 'JetDragon', category: 'Pal spawn' },
  { name: 'Anubis Pal', itemId: 'Anubis', category: 'Pal spawn' },
  { name: 'Frostallion Pal', itemId: 'IceHorse', category: 'Pal spawn' },
];
