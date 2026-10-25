# SCON-HD Homepage

A responsive, single-page homepage for SCON-HD Developers, built with React and Vite. The frontend includes a scroll-controlled hero, company and project sections, a contact area, and a footer.

## Project requirements

### Software

- Node.js 18 or later
- npm
- A modern browser with JavaScript enabled
- Internet access to load the Cabinet Grotesk and Ranade fonts from Fontshare and the remote project gallery images

### Frontend dependencies

Dependencies are managed in `frontend/package.json` and locked in `frontend/package-lock.json`.

- React 18
- React DOM 18
- Vite 6
- `@vitejs/plugin-react` 4

## Features

- Responsive homepage sections: Hero, About, Developments, Redevelopment, Contact, and Footer
- Hero background animation that advances and reverses through supplied image frames while scrolling
- Scroll-triggered section content reveals, with reduced-motion preferences respected
- Residential and Commercial project gallery controls
- Responsive navigation and layouts
- Local brand and section images in the frontend public assets

## Run locally

From the repository root:

```sh
cd frontend
npm install
npm run dev
```

Vite prints a local development URL in the terminal.

## Build and preview

```sh
cd frontend
npm run build
npm run preview
```

The production output is generated in `frontend/dist`.

## Repository layout

```text
.
├── backend/                 # Placeholder for future backend work
├── frontend/
│   ├── public/
│   │   ├── images/           # Brand and section images
│   │   └── video_image_frames/
│   ├── src/
│   │   ├── components/       # Shared UI components
│   │   ├── pages/            # Page composition
│   │   ├── sections/         # Homepage sections
│   │   └── styles/           # Homepage styles
│   ├── index.html
│   ├── package.json
│   └── package-lock.json
└── README.md
```

## Notes

- The backend folder is currently a placeholder; the project has no server or API integration.
- Project gallery photos are currently loaded from Unsplash URLs. An internet connection is needed to display them.
- Contact fields are currently presentation-only and are not connected to a submission service.
