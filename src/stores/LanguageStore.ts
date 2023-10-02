import { create } from "zustand"

type Language = "ru" | "en"

interface LanguageStore {
  currentLanguage: Language
  toggleLanguage: () => void
}

const russianLanguageCodes = [
  "ru", // Russian
  "ru-RU", // Russian in Russia
  "ru-BY", // Russian in Belarus
  "ru-KZ", // Russian in Kazakhstan
  "ru-KG", // Russian in Kyrgyzstan
  "ru-MD", // Russian in Moldova
  "ru-UA", // Russian in Ukraine
  "be", // Belarusian
  "be-BY", // Belarusian in Belarus
  "kk", // Kazakh
  "kk-KZ", // Kazakh in Kazakhstan
  "ky", // Kyrgyz
  "ky-KG", // Kyrgyz in Kyrgyzstan
  "uk", // Ukrainian
  "uk-UA", // Ukrainian in Ukraine
]

export const languageStore = create<LanguageStore>((set) => {
  const initialLanguage: Language = russianLanguageCodes.includes(navigator.language) ? "ru" : "en"

  return {
    currentLanguage: initialLanguage,
    toggleLanguage: () => set((state) => ({ currentLanguage: state.currentLanguage === "ru" ? "en" : "ru" })),
  }
})
