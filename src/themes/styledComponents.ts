import { styled } from "@mui/material/styles"
import { Avatar } from "@mui/material"

export const ProfilePicture = styled(Avatar)(({ theme }) => ({
  height: 200,
  width: 200,
  border: `2px solid white`,

  [theme.breakpoints.down("sm")]: {
    height: 150,
    width: 150,
  },
}))

export const SectionBody = styled("section")(({ theme }) => ({
  borderLeft: `2px solid ${theme.palette.divider}`,
  paddingLeft: theme.spacing(2),
  marginBottom: theme.spacing(5),
}))
