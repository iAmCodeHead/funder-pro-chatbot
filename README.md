# Funder Pro Chatbot

## Tools
🚀 Next.js, Tailwind CSS and TypeScript ⚡️ Made with developer experience first: Next.js, TypeScript, ESLint, Prettier, Husky, Lint-Staged, Jest, Testing Library, Commitlint, VSCode, OpenAI API, Langchain, PostCSS, Tailwind CSS.


### Features

Developer experience first:

- ⚡ [Next.js](https://nextjs.org) for Static Site Generator
- 🔥 Type checking [TypeScript](https://www.typescriptlang.org)
- 💎 Integrate with [Tailwind CSS](https://tailwindcss.com)
- ✅ Strict Mode for TypeScript and React 18
- 📏 Linter with [ESLint](https://eslint.org) (default NextJS, NextJS Core Web Vitals, Tailwind CSS and Airbnb configuration)
- 💖 Code Formatter with [Prettier](https://prettier.io)
- 🦊 Husky for Git Hooks
- 🚫 Lint-staged for running linters on Git staged files
- 🚓 Lint git commit with Commitlint
- 📓 Write standard compliant commit messages with Commitizen
- 💡 Absolute Imports using `@` prefix
- 🗂 VSCode configuration: Debug, Settings, Tasks and extension for PostCSS, ESLint, Prettier, TypeScript, Jest

Built-in feature from Next.js:

- ☕ Minify HTML & CSS
- 💨 Live reload
- ✅ Cache busting

### Requirements

- Node.js 16+ and npm

### Architecture

Here is a diagram that explains the inner workings already handled by langChain
![funder-pro-chatbot](https://github.com/iAmCodeHead/funder-pro-chatbot/assets/35177481/c1b119cf-f970-4329-8dea-a06ed9024a50)



### Getting started

To run the app using docker-compose:

Ensure you have docker installed and setup on your system.

Run the following command on your local environment:
```shell
git clone --depth=1 https://github.com/iAmCodeHead/funder-pro-chatbot my-project-name
cd my-project-name
docker compose up
```
This will spin up the application. however, there is a known issue with faiss-node dusing containerization here:

```
https://github.com/hwchase17/langchainjs/issues/1930
```
You might encounter an error as shown in the screenshot below:


![funder-pro-error](https://github.com/iAmCodeHead/funder-pro-chatbot/assets/35177481/28f83961-77e6-48fe-a836-2989014b3905)


Run the following command on your local environment:

```shell
git clone --depth=1 https://github.com/iAmCodeHead/funder-pro-chatbot my-project-name
cd my-project-name
npm install
```

Then, you can run locally in development mode with live reload:

```shell
npm run dev
```

Open http://localhost:3000 with your favorite browser to see your project.

```shell
.
├── README.md                       # README file
├── __mocks__                       # Mocks for testing
├── .github                         # GitHub folder
├── .husky                          # Husky configuration
├── .vscode                         # VSCode configuration
├── public                          # Public assets folder
├── src
│   ├── components                  # Layouts components
│   ├── docs                        # Founder pro FAQs
│   ├── faiss-store                 # vector data for faiss
│   ├── pages                       # Next JS Pages
│   ├── scripts                     # Executable scripts
│   ├── styles                      # Styles folder
│   ├── types                       # Custom response types
│   └── utils                       # Utility functions
├── tailwind.config.js              # Tailwind CSS configuration
└── tsconfig.json                   # TypeScript configuration
```

### Commit Message Format

The project enforces [Conventional Commits](https://www.conventionalcommits.org/) specification. This means that all your commit messages must be formatted according to the specification. To help you write commit messages, the project uses [Commitizen](https://github.com/commitizen/cz-cli), an interactive CLI that guides you through the commit process. To use it, run the following command:

```shell
git add .
npm run commit
```

One of the benefits of using Conventional Commits is that it allows us to automatically generate a `CHANGELOG` file. It also allows us to automatically determine the next version number based on the types of commits that are included in a release.

### VSCode information (optional)

If you are VSCode users, you can have a better integration with VSCode by installing the suggested extension in `.vscode/extension.json`. The starter code comes up with Settings for a seamless integration with VSCode. The Debug configuration is also provided for frontend and backend debugging experience.

With the plugins installed on your VSCode, ESLint and Prettier can automatically fix the code and show you the errors. Same goes for testing, you can install VSCode Jest extension to automatically run your tests and it also show the code coverage in context.

Pro tips: if you need a project wide type checking with TypeScript, you can run a build with <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>B</kbd> on Mac.
