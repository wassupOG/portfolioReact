import BodySections from "../components/Section"
import { Button, Link, Paper } from "@mui/material"
import LinkIcon from "@mui/icons-material/Link"
import GitHubIcon from "@mui/icons-material/GitHub"
import { languageStore } from "../stores/LanguageStore"
import LanguageSwitch from "../components/LanguageSwitch"

const ruContents = [
  {
    title: "👋 Обо мне",
    body: [
      <>
        Привет! Меня зовут Илья, я занимаюсь веб-разработкой. С удовольствием работаю как над backend, так и frontend составляющими, всегда уделяя внимание
        деталям. К любой задаче или проблеме отношусь как к шансу улучшить свои навыки и узнать что-то новое.
      </>,
    ],
  },
  {
    title: "💻 Стек технологий",
    body: [
      <>
        <strong>Frontend:</strong> JavaScript, CSS, SCSS, HTML и React.
      </>,
      <>
        <strong>Backend:</strong> Python, MySQL, SQLite и Django.
      </>,
    ],
  },
  {
    title: "🤓 Образование и академические достижения",
    body: [
      <>
        - Студент магистерской программы{" "}
        <Link href="https://nnov.hse.ru/en/ma/global/" target="_blank">
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
        - Сдал IELTS Academic на 8 из 9 баллов - эквивалент C1/C2 по шкале CEFR., - Закончил{" "}
        <Link href="https://disk.yandex.com/i/h8-HN4qphpwzGQ" target="_blank">
          CS50
        </Link>{" "}
        от Гарварда.
      </>,
    ],
  },
  {
    title: "🚀 Проекты",
    body: [
      <>
        <Paper variant="outlined" sx={{ p: 2, borderRadius: 3 }} className="project-container">
          <div className="project-links">
            <Link href="https://englishful.ru/" target="_blank" fontWeight={600} fontSize="large" color="secondary">
              <Button startIcon={<LinkIcon />} color="secondary">
                englishful.ru
              </Button>
            </Link>
            <Link href="https://github.com/wassupOG/englishful-public" target="_blank" fontWeight={600} fontSize="large" color="secondary">
              <Button startIcon={<GitHubIcon />} color="secondary">
                GitHub
              </Button>
            </Link>
          </div>
          <div className="project-stack">
            <strong>Использованный стек:</strong> Django, MySQL, JavaScript и SCSS.
          </div>
          Мой главный проект - онлайн платформа для изучения английского языка <strong>"englishful"</strong>
        </Paper>

        <Paper variant="outlined" sx={{ p: 2, borderRadius: 3 }} className="project-container">
          <div className="project-links">
            <Link href="https://xn--h1adaoabdikk3e.xn--p1ai/" target="_blank" fontWeight={600} fontSize="large" color="secondary">
              <Button startIcon={<LinkIcon />} color="secondary">
                простокошки.рф
              </Button>
            </Link>
            <Link href="https://github.com/wassupOG/prostokoshkiTS" target="_blank" fontWeight={600} fontSize="large" color="secondary">
              <Button startIcon={<GitHubIcon />} color="secondary">
                GitHub
              </Button>
            </Link>
          </div>
          <div className="project-stack">
            <strong>Использованный стек:</strong> React, TypeScript, Zustand и SCSS.
          </div>
          Cайт некоммерческого приюта для бездомных животных <strong>"Просто Кошки"</strong>
        </Paper>
      </>,
    ],
  },
]

const enContents = [
  {
    title: "👋 About me",
    body: [
      <>
        Hello there, I'm Ilya – a passionate developer who really enjoys building stuff. I work on my projects with love for both aesthetics and code. I
        approach each challenge with a growth-oriented mindset, always seeking opportunities to enhance my skills and create solutions that not only meet but
        also exceed expectations.
      </>,
    ],
  },
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
