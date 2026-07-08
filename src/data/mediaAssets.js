// src/data/mediaAssets.js
// Central media map. Uses relative import paths from src/assets.
// All paths use Vite's dynamic imports or URLs for safe bundling.

import zoro1  from "../assets/zoro/3dc1000fcf371c8c125f45984a025065.gif";
import zoro2  from "../assets/zoro/3e4a7de6a7ffd265747129d977d15d53.gif";
import zoro3  from "../assets/zoro/3f10b17c8475c145077a8613e8b94032.gif";
import zoro4  from "../assets/zoro/4afadbfad5bde75134d334d09211e6cd.gif";
import zoro5  from "../assets/zoro/5825275c46bc16df81c72391aa98312a.gif";
import zoro7  from "../assets/zoro/6009efc3687ddaaf405acd311cc38b9b.gif";
import zoro9  from "../assets/zoro/6db61b4f46ddc086b08091d54aefa36d.gif";
import zoro10 from "../assets/zoro/77dd356a96ca201dbd60459c89a58d18.gif";
import zoro11 from "../assets/zoro/b06eea2ce029b6bd7ab1d59302215582.gif";
import zoro12 from "../assets/zoro/b8e3c43bbc4aca3747995d05d253e368.gif";
import zoro13 from "../assets/zoro/bed3b4aa0dc04214229f3e3ed9313d4a.gif";
import zoro14 from "../assets/zoro/c04f5aa6eb2009bb8d7d66bed572cdeb.gif";
import zoro15 from "../assets/zoro/cf9e887c161f96c997c225e878a6dc1c.gif";
import zoro16 from "../assets/zoro/ec692fcf69caa9fb380d72d524b355b7.gif";
import zoroJpg from "../assets/zoro/2c19394916c7d49856c0bfb914d17c12.jpg";

// Explicit Zoro 1 & 2
import Zoro1   from "../assets/zoro/Zoro1.gif";
import Zoro2   from "../assets/zoro/Zoro2.gif";

// Anime Gifs
import Luffy      from "../assets/anime/Luffy.gif";
import ItachiFire from "../assets/anime/itachifire.gif";
import Jinwoo     from "../assets/anime/jinwoo.gif";

import anime1 from "../assets/anime/a3520cf3b977a6a2dae72175d4671875.gif";
import anime2 from "../assets/anime/itachifire.gif";
import anime3 from "../assets/anime/Luffy.gif";

// Free Fire GIFs
import ffGif1 from "../assets/games/freefire/443208ee4c6ee1f841be0f056df93c45.gif";
import ffGif2 from "../assets/games/freefire/47e0617f0b782073a0d7fb064914a097.gif";

// Free Fire MP4 Clips
const ffClip = (filename) =>
  new URL(`../assets/games/freefire/${filename}`, import.meta.url).href;

export const freefireClips = [
  ffClip("VID-20260709-WA0003.mp4"),
  ffClip("VID-20260709-WA0004.mp4"),
  ffClip("VID-20260709-WA0005.mp4"),
  ffClip("VID-20260709-WA0006.mp4"),
  ffClip("VID-20260709-WA0007.mp4"),
  ffClip("VID-20260709-WA0008.mp4"),
  ffClip("VID-20260709-WA0009.mp4"),
  ffClip("VID-20260709-WA0010.mp4"),
  ffClip("VID-20260709-WA0011.mp4"),
  ffClip("VID-20260303-WA0004.mp4"),
  ffClip("VID-20260303-WA0007.mp4"),
  ffClip("VID-20260702-WA0062.mp4"),
];

export const freefireGifs = [ffGif1, ffGif2];

// Horror GIFs / JPG
const hUrl = (filename) =>
  new URL(`../assets/games/horror games/${filename}`, import.meta.url).href;

export const horrorClips = [
  hUrl("00fa165de6858e0efb767e38ec2508eb.gif"),
  hUrl("24918d2a3f24f46cec0c4a405d51c520.gif"),
  hUrl("2de6e437dab609d59cbc82966cc4f4c1.gif"),
  hUrl("d53dc10f52ce54be671cfb16643eaa9f.gif"),
  hUrl("e78997fbb915947287f6ffc25700b5f1.gif"),
];

export const horrorImages = [
  hUrl("a6b12f2d5d6d976eb3c6bbe5a08f123d.jpg"),
];

// Grouped exports
export const zoroGifs = [
  Zoro1, Zoro2, zoro1, zoro2, zoro3, zoro4, zoro5, zoro7,
  zoro9, zoro10, zoro11, zoro12, zoro13, zoro14, zoro15, zoro16
];

export const zoroImages = [zoroJpg];
export const animeGifs = [Luffy, ItachiFire, Jinwoo, anime1, anime2, anime3];

// Specific Intro Showcase assets
export const introShowcaseAssets = [
  { type: "gif", src: Zoro1, name: "Zoro1" },
  { type: "gif", src: Zoro2, name: "Zoro2" },
  { type: "gif", src: Luffy, name: "Luffy" },
  { type: "gif", src: ItachiFire, name: "itachifire" },
  { type: "gif", src: Jinwoo, name: "jinwoo" }
];

export const heroBg = Zoro1;
export const heroAura = Zoro2;
export const gamingBg = ffGif1;
export const luffyAsset = Luffy;
export const itachifireAsset = ItachiFire;
export const jinwooAsset = Jinwoo;
export const zoro1Asset = Zoro1;
export const zoro2Asset = Zoro2;
