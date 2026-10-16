# Tunazzina Rahman | Developer Portfolio

My personal portfolio website. It shows my projects with live demos, my skills, and a downloadable resume, so recruiters can see what I build in one place.

**Live site:** https://YOUR-SITE.vercel.app



## Features

- Dark, responsive design that works on phones, tablets and desktops
- Projects section with screenshots, tech stack, live demo and source code links
- Skills grouped by frontend, backend, database, tools and creative work
- About section with education and background
- One-click resume download and a "Copy email" button
- Mobile menu and smooth scrolling between sections
- All content lives in one file (`src/data/site.ts`), so updating the site is easy

## Tech stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- `next/font` (Bricolage Grotesque and DM Sans)
- Deployed on Vercel

## Project structure

```
src/
├── app/
│   ├── layout.tsx      Root layout, fonts and metadata
│   ├── page.tsx        Home page that loads every section
│   └── globals.css     Tailwind theme and global styles
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   └── Copyemail.tsx
├── data/
│   └── site.ts         Name, links, projects and skills
└── assets/             Photo and project screenshots
public/
└── Tunazzina-Rahman-Resume.pdf
```

## Run it locally

```bash
git clone https://github.com/TunazzinaEmma2002/portfolio.git
cd portfolio
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

To check that the project builds without errors:

```bash
npm run build
```

## Contact

- Email: tunazzina1054@gmail.com
- LinkedIn: https://www.linkedin.com/in/tunazzina-rahman-5b882a419/
- GitHub: https://github.com/TunazzinaEmma2002