const inv = [
  ['/', 'Palworld Hacks & Cheats 2026 – Free Trainers & Mods', 'Download free, undetected Palworld hacks and trainers for PC. God mode, infinite stamina, 100% capture rate, item spawning and a mod menu — updated for 1.0.5.'],
  ['/palworld-trainers/', 'Free Palworld Trainers 2026 – Undetected PC Cheats', 'Grab free Palworld trainers for Steam and Game Pass. God mode, infinite stamina, instant crafting, 100% capture chance and stat edits — no survey, no paywall.'],
  ['/palworld-mod-menu/', 'Palworld Mod Menu 2026 – Free Hack Download (PC)', 'A free Palworld mod menu with ESP, teleport, item spawning and speed hacks. Works on the 1.0.5 patch for Steam and Game Pass PC — clean, no survey.'],
  ['/palworld-console-commands/', 'Palworld Console Commands & Cheat Codes (Full List)', 'Every Palworld console command and cheat code in one list — item IDs, spawn commands, teleport, XP and admin commands. Copy-paste ready with examples.'],
  ['/palworld-mods/', 'Best Palworld Mods 2026 – QoL, Overhauls & Cheats', 'The best Palworld mods of 2026 — performance fixes, UI overhauls, new Pals and cheat mods. All free, version-checked against patch 1.0.5 and safe to install.'],
  ['/palworld-god-mode/', 'Palworld God Mode Hack – How to Enable It (2026)', 'Turn on Palworld god mode in under two minutes. Step-by-step for trainers, mods and console commands, plus what breaks and how to turn it off safely.'],
  ['/palworld-item-spawner/', 'Palworld Item Spawner & Item IDs – Spawn Anything', 'Spawn any item in Palworld with our item spawner guide and full item ID list. Works offline and on private servers — includes commands for every material.'],
  ['/palworld-hacks-xbox/', 'Palworld Hacks for Xbox & Game Pass PC (Working 2026)', "Palworld hacks that work on Xbox and Game Pass PC. What's supported, what isn't, and the safest trainers for console players in 2026, tested after 1.0.5."],
  ['/download/', 'Download Palworld Hacks – Free, No Survey (2026)', 'Download Palworld hacks free — one archive, no survey, no installer bloat. Includes trainer, mod menu and console command sheet, updated for 1.0.5.'],
  ['/how-to-install/', 'How to Install Palworld Hacks – Step-by-Step Guide', 'How to install Palworld hacks without breaking your save. Step-by-step setup for trainers and mods, plus how to back up saves and roll back a bad install.'],
  ['/faq/', 'Palworld Hacks FAQ – Safety, Bans & Compatibility', 'Is it safe? Will I get banned? Palworld hack FAQ covering detection, co-op and server rules, antivirus flags, Game Pass limits and refunds—answered straight.'],
  ['/blog/', 'Palworld Hack Updates & Patch Notes Blog', 'Palworld hack updates, patch compatibility notes and new cheat releases. We track every 1.0.x patch so your trainer keeps working after each update.'],
];

let ok = true;
for (const [p, t, d] of inv) {
  if (t.length > 60) {
    console.log('TITLE FAIL', p, t.length);
    ok = false;
  }
  if (d.length < 140 || d.length > 158) {
    console.log('DESC FAIL', p, d.length, d);
    ok = false;
  }
}
console.log(ok ? 'All inventory lengths OK' : 'Issues found');
