export interface HowToStep {
  name: string;
  text: string;
}

export const installPalworldHacksSteps: HowToStep[] = [
  {
    name: 'Back up Palworld saves on Windows',
    text: 'Close Palworld on Steam or Xbox Game Pass PC. Copy %LOCALAPPDATA%\\Pal\\Saved\\SaveGames to a dated folder so you can roll back if a trainer touches the wrong flag.',
  },
  {
    name: 'Download the 1.0.5-compatible pack',
    text: 'Use our download page for the no-survey archive with trainer, mod menu notes and console command sheet. Verify the file size matches the listing before extracting.',
  },
  {
    name: 'Install external trainer or mod menu',
    text: 'Run RAM-based trainers as administrator with Palworld closed. For mod menus, follow the external overlay guide—no DLL injection into the Pocketpair executable on live servers unless you accept ban risk.',
  },
  {
    name: 'Launch Palworld and test offline',
    text: 'Start a private world, enable god mode or infinite stamina one feature at a time, then confirm saves still load. Re-enable cloud sync only after you trust the setup.',
  },
];

export const palworldGodModeSteps: HowToStep[] = [
  {
    name: 'Pick your method',
    text: 'Choose a Palworld trainer hotkey, mod menu toggle, or admin console command on a dedicated server. Each path enables god mode differently on patch 1.0.5.',
  },
  {
    name: 'Enable god mode in a safe session',
    text: 'Load a solo or private server world. With an external trainer, toggle invincibility or no damage before engaging bosses so co-op desync stays minimal.',
  },
  {
    name: 'Confirm combat behavior',
    text: 'Take fall damage and enemy hits once to verify infinite health works. Disable related speed or capture cheats if Pocketpair stability drops on your rig.',
  },
  {
    name: 'Turn god mode off cleanly',
    text: 'Disable the trainer option before saving and quitting. Remove console admin flags on dedicated servers so other players are not stuck in cheat states.',
  },
];
