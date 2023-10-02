import { IconButton, Tooltip } from "@mui/material"
import { languageStore } from "../stores/LanguageStore"

export default function LanguageSwitch() {
  const { currentLanguage, toggleLanguage } = languageStore()

  return (
    <>
      <div className="language-switch">
        <Tooltip title={currentLanguage === "en" ? "Включить Русскую версию" : "Switch to English"}>
          <IconButton sx={{ fontSize: "larger", fontWeight: 600 }} onClick={toggleLanguage}>
            {currentLanguage === "ru" ? "RU" : "EN"}
          </IconButton>
        </Tooltip>
      </div>
    </>
  )
}
