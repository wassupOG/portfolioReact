import GitHubIcon from "@mui/icons-material/GitHub"
import TelegramIcon from "@mui/icons-material/Telegram"

export default function ProfileLinks() {
  return (
    <>
      <div className="profile-links">
        <a href="https://github.com/wassupOG" target="_blank" className="profile-link" aria-label="GitHub Profile">
          <GitHubIcon className="profile-link-svg" />
        </a>
        <a href="https://t.me/wassup21" target="_blank" className="profile-link" aria-label="Telegram link">
          <TelegramIcon className="profile-link-svg" />
        </a>
      </div>
    </>
  )
}
