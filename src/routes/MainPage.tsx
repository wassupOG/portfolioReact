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
      <>
        <Paper variant="outlined" sx={{ p: 1, borderRadius: 3, mt: 1 }}>
          Открыт к предложениям на позицию frontend / fullstack разработчика -{" "}
          <Link href="https://disk.yandex.com/i/g7pIy6pgVgLrBg" target="_blank">
            ссылка на резюме
          </Link>
          .
        </Paper>
      </>,
    ],
  },
  {
    title: "💻 Стек технологий",
    body: [<>React, Zustand, TypeScript, JavaScript, Python, Django, MySQL, SQLite, CSS, SCSS и HTML.</>],
  },
  {
    title: "🤓 Образование и академические достижения",
    body: [
      <>
        - Студент магистерской программы{" "}
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
        - Сдал IELTS Academic на 8 из 9 баллов - эквивалент C1/C2 по шкале CEFR.{" "}
        <Link href="https://disk.yandex.ru/i/0nDS3cJpqKX05A" target="_blank">
          (сертификат)
        </Link>
      </>,
      <>
        - Закончил{" "}
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
          Мой главный проект - онлайн платформа для изучения английского языка <strong>"englishful"</strong>.
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
          Cайт некоммерческого приюта для бездомных животных <strong>"Просто Кошки"</strong>.
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
      <>
        <Paper variant="outlined" sx={{ p: 1, borderRadius: 3, mt: 1 }}>
          Open to offers for a frontend / fullstack developer role -{" "}
          <Link href="https://disk.yandex.com/i/x17jeYiLERkVFg" target="_blank">
            resume link
          </Link>
          .
        </Paper>
      </>,
    ],
  },
  {
    title: "💻 Stack",
    body: [<>React, Zustand, TypeScript, JavaScript, Python, Django, MySQL, SQLite, CSS, SCSS & HTML.</>],
  },
  {
    title: "🤓 Education & Academic Achievements",
    body: [
      <>
        -{" "}
        <Link href="https://nnov.hse.ru/en/ma/global/" target="_blank">
          HSE Global Business
        </Link>{" "}
        student - class of 2024. (master's degree)
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
      <>
        - Finished Harvard's{" "}
        <Link href="https://disk.yandex.com/i/h8-HN4qphpwzGQ" target="_blank">
          CS50
        </Link>
        .
      </>,
    ],
  },
  {
    title: "🚀 Projects",
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
            <strong>Stack used:</strong> Django, MySQL, JavaScript & SCSS.
          </div>
          My primary project - an online platform for learning english called <strong>"englishful"</strong>.
        </Paper>

        <Paper variant="outlined" sx={{ p: 2, borderRadius: 3 }} className="project-container">
          <div className="project-links">
            <Link href="https://xn--h1adaoabdikk3e.xn--p1ai/" target="_blank" fontWeight={600} fontSize="large" color="secondary">
              <Button startIcon={<LinkIcon />} color="secondary">
                prostokoshki.rf
              </Button>
            </Link>
            <Link href="https://github.com/wassupOG/prostokoshkiTS" target="_blank" fontWeight={600} fontSize="large" color="secondary">
              <Button startIcon={<GitHubIcon />} color="secondary">
                GitHub
              </Button>
            </Link>
          </div>
          <div className="project-stack">
            <strong>Stack used:</strong> React, TypeScript, Zustand & SCSS.
          </div>
          Charity website for an animal shelter based in Nizhny Novgorod.
        </Paper>
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
