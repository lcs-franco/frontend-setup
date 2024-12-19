# Frontend Setup Template

This project serves as a template for quickly setting up frontend projects, following a Client-Side Rendering (CSR) approach.

## Key Technologies

- **Vite**: A fast and optimized build tool for frontend development.
- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A JavaScript superset that adds static typing to your code.
- **Tailwind CSS**: A utility-first framework for fast and responsive styling.

## Code Quality Tools

- **ESLint**: A linter to identify and fix issues in JavaScript/TypeScript code.
- **Prettier**: A code formatting tool.
- **Husky**: A Git hooks manager used to enforce automatic checks before commits.
- **Commitlint**: Validates commit messages to follow a specific convention.
- **Lint-staged**: Runs linters only on staged files in Git.

## Features

- Ready-to-use setup for quickly creating new frontend projects.
- Pre-configured ESLint and Prettier for consistent code maintenance.
- Git hooks set up to validate and format code automatically before commits.
- Responsive styling with Tailwind CSS.

## How to Use

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   ```

2. **Install dependencies:**

   ```bash
   yarn install
   ```

3. **Start the development server:**

   ```bash
   yarn dev
   ```

4. **Configure your project:**
   - Replace this README with information about your new project.
   - Adjust dependencies and settings as needed.

## Available Scripts

- `yarn dev`: Starts the development server.
- `yarn build`: Generates the production build.
- `yarn preview`: Previews the production build locally.
- `yarn prepare`: Sets up Husky.

## Project Structure

```plaintext
.
├── src/
│   ├── app/               # Application layer (contexts, hooks, libs, routes, utils)
│   │   ├── contexts/      # Global application contexts
│   │   ├── hooks/         # Custom hooks
│   │   ├── libs/          # Libraries and external integrations
│   │   ├── Router/        # Route configurations
│   │   └── utils/         # Utility functions
│   └── ui/                # User Interface (UI) layer
│       ├── components/    # Reusable components
│       ├── layouts/       # Application layouts
│       ├── pages/         # System pages
│       └── style/         # Global styles and theme configurations
├── .editorconfig          # EditorConfig settings
├── vite-env.d.ts          # Vite type definitions
├── main.tsx               # Main entry file
└── App.tsx                # Root component of the application
```

## Commit Conventions

This project follows the [Conventional Commits](https://www.conventionalcommits.org/) standard:

| Type         | Description                                                        |
| ------------ | ------------------------------------------------------------------ |
| **feat**     | Adding a new feature                                               |
| **fix**      | Bug fixes                                                          |
| **docs**     | Changes only to the documentation                                  |
| **style**    | Changes that do not affect code meaning (spaces, formatting, etc.) |
| **refactor** | Changes that neither add features nor fix bugs                     |
| **perf**     | Performance improvements                                           |
| **test**     | Adding or correcting tests                                         |
| **build**    | Changes that affect the build system or dependencies               |
| **ci**       | Changes to CI/CD configurations                                    |
| **chore**    | Miscellaneous tasks that do not modify source code or tests        |
| **revert**   | Reverting a previous commit                                        |

## Contribution

Feel free to use this template and contribute improvements. Open issues or submit pull requests to add features or fix problems.

---

**Enjoy the template!**
