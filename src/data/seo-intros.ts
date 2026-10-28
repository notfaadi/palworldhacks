import type { SeoPageEntry } from './seo';

/** Lead paragraph: primary keyword in first 100 words + entity context. */
export const SEO_INTROS: Partial<Record<SeoPageEntry['path'], string>> = {
  '/palworld-trainers/':
    'Our Palworld trainer roundup covers free external trainers for Steam and Xbox Game Pass on Windows 10 and Windows 11 after Pocketpair patch 1.0.5. We prioritize RAM-based, external tables—similar to FLiNG and WeMod workflows—without DLL injection into the game process, so you know why we call them lower-profile than internal menus on live servers. God mode, infinite stamina, 100% capture rate and Technology Points edits are documented with sane defaults.',
  '/palworld-mod-menu/':
    'This Palworld mod menu guide explains ESP, teleport, item spawning and speed hacks for Steam and Game Pass PC on patch 1.0.5. Menus we track run as external overlays with no DLL injection into Pocketpair’s executable—state that trust basis next to any “undetected” claim. Pair with Windows 11 fullscreen borderless, keep breeding and base building saves backed up, and test on a private server before co-op.',
  '/palworld-console-commands/':
    'Use this Palworld console commands reference when you need cheat codes without a trainer: admin spawn lines, teleport, XP boosts and item IDs for dedicated servers. Pocketpair enables most lines only when admin mode is on—offline worlds and private hosts behave differently from official co-op. Every command below is copy-paste ready for Palworld 1.0.5 with examples for Lifmunk Effigy, spheres and Ancient Technology Points.',
  '/palworld-mods/':
    'These Palworld mods are quality-of-life packs, UI overhauls and cheat-adjacent tweaks checked against version 1.0.5 on Steam. We list performance fixes, breeding helpers, base building utilities and safe install order through a mod manager mindset—back up saves before stacking gameplay changers. Pocketpair updates can break JSON mods fast; match each mod page to the 1.0.x build you run on Windows 10 or 11.',
  '/palworld-god-mode/':
    'Palworld god mode turns off damage from falls, bosses and PvP bursts when you use trainers, mod toggles or server admin cheat codes. This guide walks Pocketpair players through the safest order: backup saves, test offline, then decide if invincibility belongs in co-op or dedicated servers on patch 1.0.5. You will also learn what breaks quests and how to disable infinite health before returning to public matchmaking.',
  '/palworld-item-spawner/':
    'Palworld item IDs power spawn commands, trainer item lists and mod menu search—this hub groups IDs for weapons, spheres, Jetragon eggs and crafting mats. Use the Palworld item spawner section offline or on a dedicated server you admin; spawning endgame gear in official co-op can desync bases. Tables follow Pocketpair naming from Palworld 1.0.5 with Technology Points and Ancient Technology Points called out.',
  '/palworld-hacks-xbox/':
    'Palworld Xbox cheats differ sharply from PC: consoles cannot load Cheat Engine or external DLL mod menus. Xbox Game Pass on Windows 10/11 shares PC trainers with Steam when you install through the Microsoft store path. This page lists what Pocketpair allows on Xbox Series consoles versus Game Pass PC, ban risks on live realms, and RAM-based trainers that stay external—no fake “console mod menu” downloads.',
  '/download/':
    'This Palworld hack download bundles a trainer readme, mod menu checklist and printable console command sheet for patch 1.0.5—one archive, no survey gates, no bundled ad installers. Verify checksums, scan with Windows Defender, and install using our how-to guide so Steam and Game Pass saves stay intact on Windows 11. Free does not mean zero ban risk on official servers.',
  '/how-to-install/':
    'Learning how to install a Palworld trainer starts with save backups and knowing your platform: Steam library path versus Xbox Game Pass PC wrapper. Follow these steps for external, RAM-based tools—no DLL injection—on Pocketpair build 1.0.5. If a Palworld hack is not working, rollback the save copy, disable overlays, and re-run the trainer as administrator before touching co-op or dedicated servers.',
};
