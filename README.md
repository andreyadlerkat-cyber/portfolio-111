# DSS3D — Personal portfolio

Одностраничное портфолио/визитка на React + Vite + Tailwind CSS.

## Stack

- React + TypeScript
- Vite
- Tailwind CSS

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Content

Контент (имя, навыки, проекты, контакты): `src/content/site.ts`.

## GitHub Pages (deploy)

Проект собирается **Vite** (результат в папке `dist/`).

- Используйте workflow: `.github/workflows/pages.yml` (сборка и публикация `dist/`).
- В **Settings → Pages** выберите **Source: GitHub Actions**.
- Обязательно удалите/отключите старый workflow, который запускает `next build` (часто это `.github/workflows/nextjs.yml`), иначе Actions продолжит падать с ошибкой про `next@...`.
