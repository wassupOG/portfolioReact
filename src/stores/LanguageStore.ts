import { create } from "zustand"

type Language = "ru" | "en"

interface LanguageStore {
  currentLanguage: Language
  toggleLanguage: () => void
}

export const languageStore = create<LanguageStore>((set) => {
  const initialLanguage: Language = navigator.language.startsWith("ru") ? "ru" : "en"

  return {
    currentLanguage: initialLanguage,
    toggleLanguage: () => set((state) => ({ currentLanguage: state.currentLanguage === "ru" ? "en" : "ru" })),
  }
})
