import BodySections from "../components/Section";
import { Link, Paper } from "@mui/material";
import { languageStore } from "../stores/LanguageStore";
import LanguageSwitch from "../components/LanguageSwitch";
import BusinessIcon from "@mui/icons-material/Business";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import EngineeringIcon from "@mui/icons-material/Engineering";

const STACK =
    "React, Node, GraphQL, REST, TypeScript, JavaScript, Prisma, Jest, Zustand, Redux, Redux Toolkit, Next.js, NestJS, Express.js, MySQL, PostgreSQL, CSS, SCSS, Tailwind, turborepo, ApolloClient, TanStack Query (React Query), axios, react-admin, ApolloServer, materialUI, shadcnUI";
const RESUME_LINK = "https://disk.yandex.com/i/g7pIy6pgVgLrBg";

const ruContents = [
    {
        title: "👋 Обо мне",
        body: [
            <>
                Привет! Меня зовут Илья, я <b style={{ fontSize: "1.05rem" }}>Fullstack / Frontend React разработчик</b>
                . С удовольствием работаю как над backend, так и frontend составляющими, всегда уделяя внимание деталям.
                К любой задаче или проблеме отношусь как к шансу улучшить свои навыки и узнать что-то новое.
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
        title: "💼 Опыт работы",
        body: [
            <Paper className="flex-column-small-gap" variant="outlined" sx={{ p: 1, borderRadius: 3, mt: 1 }}>
                <div className="flex-row-small-gap">
                    <BusinessIcon />
                    <Link href="https://axitech.ru/" target="_blank">
                        АКСИТЕХ
                    </Link>
                </div>
                <div className="flex-row-small-gap">
                    <WorkHistoryIcon />
                    <div>
                        <b>Middle Fullstack React Разработчик</b>, Ноябрь 2023 — по настоящее время
                    </div>
                </div>
                <div>
                    <div className="flex-row-small-gap">
                        <EngineeringIcon />
                        <div>Обязанности:</div>
                    </div>
                    <div className="flex-column-no-gap">
                        <div>
                            — Руководство группой разработки внутренней системы управления бизнес-процессами компании
                        </div>
                        <div>
                            — Улучшение качества кода и производительности разработки в проектах за счёт внедрения
                            TypeScript, Prettier, ESlint и других вещей, способствующих developer-experience.
                        </div>
                        <div>— Разработка и поддержка Frontend приложений на React - JavaScript и TypeScript</div>
                        <div>
                            — Разработка и поддержка Backend сервисов на Node — JavaScript и TypeScript (GraphQL,
                            ApolloServer, ApolloFederation)
                        </div>
                        <div>— Разработка и доработка архитектуры сервисов, реализация бизнес-логики приложений</div>
                        <div>— Написание тестов (Jest)</div>
                        <div style={{ marginTop: "10px" }}>
                            <b>Задействованный стек:</b> React, JavaScript, TypeScript, Node, GraphQL, PostgreSQL,
                            Prisma, Jest, react-admin, MUI
                        </div>
                    </div>
                </div>
            </Paper>,
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
            </>,
        ],
    },
];

const enContents = [
    {
        title: "👋 About me",
        body: [
            <>
                Hello there, I'm Ilya – <b style={{ fontSize: "1.05rem" }}>Fullstack / Frontend React developer</b> who
                really enjoys building stuff. I work on my projects with love for both aesthetics and code. I approach
                each challenge with a growth-oriented mindset, always seeking opportunities to enhance my skills and
                create solutions that not only meet but also exceed expectations.
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
        title: "💼 Work experience",
        body: [
            <Paper className="flex-column-small-gap" variant="outlined" sx={{ p: 1, borderRadius: 3, mt: 1 }}>
                <div className="flex-row-small-gap">
                    <BusinessIcon />
                    <Link href="https://axitech.ru/" target="_blank">
                        AXITECH
                    </Link>
                </div>
                <div className="flex-row-small-gap">
                    <WorkHistoryIcon />
                    <div>
                        <b>Middle Fullstack React Developer</b>, November 2023 — present
                    </div>
                </div>
                <div>
                    <div className="flex-row-small-gap">
                        <EngineeringIcon />
                        <div>Responsibilities:</div>
                    </div>
                    <div className="flex-column-no-gap">
                        <div>
                            — Managing a group developing the company's internal business process management system
                        </div>
                        <div>
                            — Improving code quality and development productivity in projects by implementing
                            TypeScript, Prettier, ESlint and other things that promote developer experience
                        </div>
                        <div>— Development and support of Frontend React applications - JavaScript and TypeScript</div>
                        <div>— Development and support of Backend Node services - JavaScript and TypeScript</div>
                        <div>
                            — Development and refinement of service architecture, implementation of application business
                            logic
                        </div>
                        <div>— Code testing (Jest)</div>
                        <div style={{ marginTop: "10px" }}>
                            <b>Stack used:</b> React, JavaScript, TypeScript, Node, GraphQL, PostgreSQL, Prisma, Jest,
                            react-admin, MUI
                        </div>
                    </div>
                </div>
            </Paper>,
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
    },
];

export default function MainPage() {
    const { currentLanguage } = languageStore();
    return (
        <>
            <LanguageSwitch />
            <BodySections contents={currentLanguage === "ru" ? ruContents : enContents} />
        </>
    );
}
