import { Typography } from "@mui/material"
import { SectionBody } from "../themes/styledComponents"

interface SectionProps {
  contents: bodyText[]
}

interface bodyText {
  title: string
  body: any[]
}

export default function BodySections({ contents }: SectionProps) {
  return (
    <>
      {contents.map((section) => {
        return (
          <SectionBody key={section.title}>
            <Typography marginBottom={1.5} variant="h5" fontWeight={600}>
              {section.title}
            </Typography>
            {section.body.map((bodyP, index) => (
              <div key={index}>{bodyP}</div>
            ))}
          </SectionBody>
        )
      })}
    </>
  )
}
