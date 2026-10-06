# EDDB vue

EDDB stands for Educational Databases, and is a project for rapidly setting up databases for teaching and research.

## Setup

```bash
# install the dependencies
npm install

# start the dev server on localhost:3000
npm run dev

# build the app for production
npm run build
```

## Documentation

[Vue.js](https://vuejs.org/)
[Nuxt](https://nuxt.com)
[Directus](https://directus.io/)
[Tailwind CSS](https://tailwindcss.com)
[Daisy UI](https://daisyui.com)
[Tabler icons](https://tabler-icons.io/)

## Configure project

One codebase serves several showcases, each with its own folder under
`config/` (`nafo`, `callisto`). The project is selected in two files:

- `app.config.ts`: `import config from "./config/<project>/app"`
- `nuxt.config.ts`: the same import, plus `const baseURL = "/<project>/"`

The committed files select **nafo**. To build callisto, switch both files to
`callisto` before building, without committing the change.

## Deploy on svx-web-eddb

As user `podman`, in the single clone `/home/podman/repos/eddb-vue`:

```bash
git pull
# select the project in app.config.ts and nuxt.config.ts (see above)
podman build -t eddb-<project> .
systemctl --user restart eddb-<project>
```

The Quadlet units `eddb-nafo` and `eddb-callisto` run the local images
`localhost/eddb-<project>:latest`. The clone stays configured for the last
project built: check `git diff` before building the other one. If the build
fails, first compare the Node version with your local environment; for
`EMFILE` errors, see `docs/podman.md` in `svx-web-configs`.
