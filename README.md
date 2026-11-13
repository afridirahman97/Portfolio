# Afridi Ibn Rahman — Portfolio

Personal portfolio built with React, Three.js, Tailwind CSS and Vite.

Live site: https://afridi-ibn-rahman.netlify.app/

## Editing content

All text content lives in `src/constants/index.js`: profile links, experience,
publications (the Research section), skills, projects and testimonials.

## Development

```bash
npm install
npm run dev
npm run build
```

The contact form uses EmailJS and needs `VITE_APP_EMAILJS_SERVICE_ID`,
`VITE_APP_EMAILJS_TEMPLATE_ID` and `VITE_APP_EMAILJS_PUBLIC_KEY` set at build
time.
