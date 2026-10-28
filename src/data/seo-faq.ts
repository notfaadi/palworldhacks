/** Visible FAQ on /faq/ — mirrored in FAQPage JSON-LD. */
export interface SeoFaqPair {
  q: string;
  a: string;
}

export const seoFaqPairs: SeoFaqPair[] = [
  {
    q: 'Are Palworld hacks safe on Steam and Game Pass PC?',
    a: 'Free Palworld trainers and mod menus carry real risk on Pocketpair’s live service. External, RAM-based trainers avoid DLL injection but Easy Anti-Cheat can still flag behavior. Use offline or private servers when testing, keep Windows 11 updated, and read our install guide before enabling god mode or item spawners.',
  },
  {
    q: 'Will I get banned for using a Palworld trainer after patch 1.0.5?',
    a: 'Public co-op and official servers can enforce bans when anti-cheat or reports trigger. Palworld ban risk is lower on dedicated private servers you control. We document detection basics—no tool is “undetected” forever—and never promise zero bans on live matchmaking.',
  },
  {
    q: 'Do Palworld co-op cheats work with friends?',
    a: 'Host-only trainers usually affect the host world in co-op; clients should not run conflicting mods. Server rules vary: ask before enabling infinite stamina, loot magnets or ESP on a friend’s base. Console commands on dedicated servers need admin rights Pocketpair documents in 1.0.x builds.',
  },
  {
    q: 'Why does antivirus flag Palworld hack downloads?',
    a: 'External trainers and Cheat Engine tables often trigger heuristic alerts because they attach to game memory. Add an exclusion only for folders you trust, verify hashes from our download page, and avoid bundled installers. False positives are common; still scan anything not from our no-survey archive.',
  },
  {
    q: 'What works on Xbox versus Game Pass PC?',
    a: 'Xbox console builds do not support PC trainers or DLL mod menus. Game Pass on Windows 10/11 can use the same external trainers as Steam when paths match. See our Xbox hub for FLiNG-style tables, WeMod limitations and what Pocketpair blocks on console hardware.',
  },
  {
    q: 'Can I refund if Palworld updates break my trainer?',
    a: 'Free community trainers have no refund path. Paid utilities sold through our shop follow the seller’s policy—check Discord status after each 1.0.x hotfix. We publish patch notes on the blog so you know when offsets or firmware need an update before launching Palworld again.',
  },
];
