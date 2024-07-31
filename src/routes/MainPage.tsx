import BodySections from "../components/Section"
import { Link, Paper } from "@mui/material"
import { languageStore } from "../stores/LanguageStore"
import LanguageSwitch from "../components/LanguageSwitch"

const STACK = "React, Node, GraphQL, REST, TypeScript, JavaScript, Prisma, Jest, Zustand, Redux, Redux Toolkit, Next.js, NestJS, Express.js, MySQL, PostgreSQL, CSS, SCSS, Tailwind, turborepo, ApolloClient, TanStack Query (React Query), axios, react-admin, ApolloServer, materialUI, shadcnUI"
const RESUME_LINK = "https://disk.yandex.com/i/g7pIy6pgVgLrBg"

const ruContents = [
  {
    title: "👋 Обо мне",
    body: [
      <>
        Привет! Меня зовут Илья, я <b style={{fontSize: "1.05rem"}}>Fullstack / Frontend React разработчик</b>. С удовольствием работаю как над backend, так и frontend составляющими, всегда уделяя внимание
        деталям. К любой задаче или проблеме отношусь как к шансу улучшить свои навыки и узнать что-то новое.
      </>,
      <>
        <Paper variant="outlined" sx={{ p: 1, borderRadius: 3, mt: 1 }}>
          Открыт к предложениям на позицию frontend / fullstack разработчика -{" "}
          <Link href={RESUME_LINK} target="_blank">
            ссылка на резюме
          </Link>
          .
        </Paper>
      </>,
    ],
  },
  {
    title: "💻 Стек технологий",
    body: [<>{STACK}</>],
  },
  {
    title: "🤓 Образование и академические достижения",
    body: [
      <>
        - Выпускник магистерской программы{" "}
        <Link href="https://nnov.hse.ru/ma/global/" target="_blank">
          HSE Global Business
        </Link>{" "}
        - выпуск в 2024 году.
      </>,
      <>
        - Победитель грантового конкурса{" "}
        <Link href="https://nnov.hse.ru/news/638099881.html" target="_blank">
          Go Global
        </Link>{" "}
        от ВШЭ.
      </>,
      <>
        - Выпускник{" "}
        <Link href="https://lunn.ru/programs/5282" target="_blank">
          переводческого факультета НГЛУ
        </Link>{" "}
        - выпуск 2022.
      </>,
      <>
        - Отлично знаю английский - сдал IELTS Academic на 8 из 9 баллов - эквивалент C1/C2 по шкале CEFR.{" "}
        <Link href="https://disk.yandex.ru/i/0nDS3cJpqKX05A" target="_blank">
          (сертификат)
        </Link>
      </>
    ],
  }
]

const enContents = [
  {
    title: "👋 About me",
    body: [
      <>
        Hello there, I'm Ilya – <b style={{fontSize: "1.05rem"}}>Fullstack / Frontend React developer</b> who really enjoys building stuff. I work on my projects with love for both aesthetics and code. I
        approach each challenge with a growth-oriented mindset, always seeking opportunities to enhance my skills and create solutions that not only meet but
        also exceed expectations.
      </>,
      <>
        <Paper variant="outlined" sx={{ p: 1, borderRadius: 3, mt: 1 }}>
          Open to offers for a frontend / fullstack developer role -{" "}
          <Link href={RESUME_LINK} target="_blank">
            resume link
          </Link>
          .
        </Paper>
      </>,
    ],
  },
  {
    title: "💻 Stack",
    body: [<>{STACK}</>],
  },
  {
    title: "🤓 Education & Academic Achievements",
    body: [
      <>
        -{" "}
        <Link href="https://nnov.hse.ru/en/ma/global/" target="_blank">
          HSE Global Business
        </Link>{" "}
        graduate - class of 2024. (master's degree)
      </>,
      <>
        -{" "}
        <Link href="https://nnov.hse.ru/news/638099881.html" target="_blank">
          Go Global
        </Link>{" "}
        grant competition winner.
      </>,
      <>
        -{" "}
        <Link href="https://lunn.ru/en" target="_blank">
          LUNN
        </Link>{" "}
        graduate, Interpreting & Translation Faculty - class of 2022.
      </>,
      <>
        - IELTS Academic Band 8 Score - equivalent to C1/C2 CEFR lvl.{" "}
        <Link href="https://disk.yandex.ru/i/0nDS3cJpqKX05A" target="_blank">
          (certificate)
        </Link>
      </>,
    ],
  }
]

export default function MainPage() {
  const { currentLanguage } = languageStore()
  return (
    <>
      <LanguageSwitch />
      <BodySections contents={currentLanguage === "ru" ? ruContents : enContents} />
    </>
  )
}
