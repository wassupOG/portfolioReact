import profilePic from "../assets/images/profile.jpg"
import ThemeSwitch from "./ThemeSwitch"
import { ProfilePicture } from "../themes/styledComponents"
import ProfileLinks from "./ProfileLinks"

export default function Header() {
  return (
    <>
      <header>
        <ThemeSwitch />
        <div className="flex-column-center">
          <ProfilePicture sx={{ height: 200, width: 200 }} src={profilePic} alt="Илья (wassupOG)" />
          <ProfileLinks />
        </div>
      </header>
    </>
  )
}
