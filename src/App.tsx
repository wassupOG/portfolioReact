import { CssBaseline } from "@mui/material"
import MainPage from "./routes/MainPage"
import { ThemeProvider } from "@emotion/react"
import { themeStore } from "./stores/ThemeStore"
import { lightTheme } from "./themes/lightTheme"
import { darkTheme } from "./themes/darkTheme"
import Header from "./components/Header"

export default function App() {
  const { currentTheme } = themeStore()
  return (
    <>
      <ThemeProvider theme={currentTheme === "light" ? lightTheme : darkTheme}>
        <CssBaseline />
        <Header />
        <div className="main-container">
          <MainPage />
        </div>
      </ThemeProvider>
    </>
  )
}
