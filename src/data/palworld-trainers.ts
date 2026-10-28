export interface TrainerSourceRow {
  name: string;
  type: string;
  platform: string;
  notes: string;
}

/** Documented external trainer categories — not direct download mirrors. */
export const palworldTrainerSources: TrainerSourceRow[] = [
  {
    name: 'FLiNG-style table',
    type: 'External RAM trainer',
    platform: 'Steam / Game Pass PC',
    notes: 'Community tables after 1.0.5; verify author and scan before use.',
  },
  {
    name: 'WeMod profile',
    type: 'Hosted trainer app',
    platform: 'Steam PC',
    notes: 'Convenient toggles; may lag hotfixes — check patch date.',
  },
  {
    name: 'Cheat Engine script',
    type: 'Manual memory edit',
    platform: 'Windows 10/11',
    notes: 'Advanced users only; back up saves; no DLL injection if script is external.',
  },
  {
    name: 'Elite loader (Levo)',
    type: 'Maintained commercial',
    platform: 'Steam / Game Pass PC',
    notes: 'Paid path with patch-day updates — use site download hub for checkout.',
  },
];

export const trainerFeatureList = [
  'God mode / no damage on private worlds',
  'Infinite stamina and weight for farming',
  '100% capture rate for breeding labs',
  'Instant craft and Technology Points sliders',
  'Pal stats and level editing offline',
];
