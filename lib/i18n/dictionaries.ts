import type { Lang } from "./types";

let en: typeof import("./en").default | null = null;
let hi: typeof import("./en").default | null = null;
let mr: typeof import("./en").default | null = null;

export async function getDictionary(lang: Lang) {
  switch (lang) {
    case "hi":
      if (!hi) hi = (await import("./hi")).default;
      return hi;
    case "mr":
      if (!mr) mr = (await import("./mr")).default;
      return mr;
    default:
      if (!en) en = (await import("./en")).default;
      return en;
  }
}

export type Dictionary = typeof import("./en").default;
