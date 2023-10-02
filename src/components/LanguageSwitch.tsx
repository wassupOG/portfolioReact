import { IconButton } from "@mui/material"
import { languageStore } from "../stores/LanguageStore"

export default function LanguageSwitch() {
  const { currentLanguage, toggleLanguage } = languageStore()
  return (
    <>
      <div className="language-switch">
        <IconButton onClick={toggleLanguage}>{currentLanguage === "ru" ? "RU" : "EN"}</IconButton>
      </div>
    </>
  )
}
