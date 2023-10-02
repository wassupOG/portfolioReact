import Tooltip from "@mui/material/Tooltip"
import LightModeIcon from "@mui/icons-material/LightMode"
import DarkModeIcon from "@mui/icons-material/DarkMode"
import { IconButton } from "@mui/material"
import { themeStore } from "../stores/ThemeStore"
import { languageStore } from "../stores/LanguageStore"

export default function ThemeSwitch() {
  const { currentTheme, toggleTheme } = themeStore()
  const { currentLanguage } = languageStore()

  let tooltipTitle
  if (currentLanguage === "ru") {
    tooltipTitle = currentTheme === "light" ? "Включить темную тему" : "Включить светлую тему"
  } else {
    tooltipTitle = currentTheme === "light" ? "Switch to dark theme" : "Switch to light theme"
  }

  return (
    <>
      <div className="theme-switch">
        <Tooltip title={tooltipTitle} onClick={toggleTheme}>
          <IconButton sx={{ color: "white", "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.08);" } }}>
            {currentTheme === "light" ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
        </Tooltip>
      </div>
    </>
  )
}
