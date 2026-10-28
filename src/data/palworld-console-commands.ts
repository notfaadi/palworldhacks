/** Admin / debug commands for Palworld 1.0.5 dedicated servers and offline admin. */
export interface ConsoleCommandRow {
  command: string;
  example: string;
  notes: string;
}

export const palworldConsoleCommands: ConsoleCommandRow[] = [
  {
    command: 'AdminPassword',
    example: 'AdminPassword yourSecurePassword',
    notes: 'Sets admin password on dedicated servers before players join.',
  },
  {
    command: 'ShowPlayers',
    example: 'ShowPlayers',
    notes: 'Lists connected Steam / Game Pass IDs on the server.',
  },
  {
    command: 'TeleportToPlayer',
    example: 'TeleportToPlayer {PlayerID}',
    notes: 'Move admin character to another player — co-op moderation.',
  },
  {
    command: 'TeleportToMe',
    example: 'TeleportToMe {PlayerID}',
    notes: 'Pull a player to your location on private hosts.',
  },
  {
    command: 'KickPlayer',
    example: 'KickPlayer {PlayerID}',
    notes: 'Remove a player from the session without a full ban.',
  },
  {
    command: 'BanPlayer',
    example: 'BanPlayer {PlayerID}',
    notes: 'Hardware-ID ban on dedicated servers you control.',
  },
  {
    command: 'GiveItem',
    example: 'GiveItem {ItemID} {Count}',
    notes: 'Spawn items by Palworld item ID — see item spawner hub.',
  },
  {
    command: 'GivePal',
    example: 'GivePal {PalID} {Level}',
    notes: 'Spawn Pals for breeding or boss tests on private worlds.',
  },
  {
    command: 'AddExp',
    example: 'AddExp {Amount}',
    notes: 'Grant Technology Points / character XP on admin worlds.',
  },
  {
    command: 'Fly',
    example: 'Fly',
    notes: 'Toggle fly mode on supported admin builds — god-mode alternative.',
  },
  {
    command: 'Ghost',
    example: 'Ghost',
    notes: 'No-clip movement for base inspection; disable before saving.',
  },
  {
    command: 'Save',
    example: 'Save',
    notes: 'Force world save on dedicated servers after spawn tests.',
  },
  {
    command: 'Shutdown',
    example: 'Shutdown {Seconds}',
    notes: 'Graceful shutdown with countdown for co-op groups.',
  },
];

export const palworldCheatCodeTips = [
  'Enable admin on dedicated servers via Pocketpair docs for 1.0.x — not available on official public realms.',
  'Use Steam offline or private co-op when testing trainers; console and RAM tools behave differently.',
  'Back up %LOCALAPPDATA%\\Pal\\Saved\\SaveGames before GiveItem or GivePal spam.',
  'Pair console spawning with our Palworld item IDs table for accurate weapon and sphere names.',
];
