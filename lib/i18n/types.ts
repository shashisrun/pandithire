export type Lang = "en" | "hi" | "mr";

export const langs: { code: Lang; label: string; nativeLabel: string }[] = [
  { code: "en", label: "English", nativeLabel: "English" },
  { code: "hi", label: "Hindi", nativeLabel: "हिन्दी" },
  { code: "mr", label: "Marathi", nativeLabel: "मराठी" },
];

export const defaultLang: Lang = "hi";

export function validateLang(lang: string): lang is Lang {
  return lang === "en" || lang === "hi" || lang === "mr";
}
