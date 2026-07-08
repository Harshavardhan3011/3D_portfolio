import React from "react";
import { usePortfolioStore } from "../../store/usePortfolioStore";

export default function SoundToggle() {
  const soundOn = usePortfolioStore((state) => state.soundOn);
  const toggleSound = usePortfolioStore((state) => state.toggleSound);

  return (
    <button
      onClick={toggleSound}
      className="p-2 rounded bg-black/85 border border-emerald-950 text-emerald-400 hover:border-emerald-500 transition pointer-events-auto"
      title={soundOn ? "Mute Cyber Audio" : "Unmute Cyber Audio"}
    >
      <span className="font-mono text-[9px] uppercase tracking-wider">
        {soundOn ? "🔊 Audio: On" : "🔇 Audio: Off"}
      </span>
    </button>
  );
}
