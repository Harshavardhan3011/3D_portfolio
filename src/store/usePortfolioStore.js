import { create } from "zustand";
import { achievements } from "../data/achievements";

export const usePortfolioStore = create((set, get) => ({
  unlocked: [],
  toast: null,
  soundOn: false,
  activeTheme: "zoro_emerald",

  toggleSound: () => set((state) => ({ soundOn: !state.soundOn })),
  
  setTheme: (themeId) => set({ activeTheme: themeId }),

  triggerUnlock: (id) => {
    const { unlocked } = get();
    if (unlocked.includes(id)) return;

    const ach = achievements.find((a) => a.id === id);
    if (!ach) return;

    // Play unlock sound if sound is active
    if (get().soundOn) {
      try {
        const audio = new Audio("https://assets.mixkit.co/active_storage/sfx/2019/2019-84.wav");
        audio.volume = 0.2;
        audio.play();
      } catch (e) {}
    }

    set({
      unlocked: [...unlocked, id],
      toast: ach
    });

    // Auto-clear toast after 3.5 seconds
    setTimeout(() => {
      set((state) => {
        if (state.toast?.id === id) {
          return { toast: null };
        }
        return {};
      });
    }, 3500);
  }
}));
