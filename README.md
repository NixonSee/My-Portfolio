# Nixon See Kok Wai - Portfolio

A modern, futuristic portfolio website showcasing projects and technical expertise.

## 🚀 Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Fast build tool
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **React Router** - Client-side routing
- **Lucide React** - Beautiful icons

## 📁 Project Structure

```
my-portfolio/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable components
│   │   ├── sections/    # Page sections (Hero, Skills, Projects)
│   │   ├── AnimatedBackground.tsx
│   │   ├── Footer.tsx
│   │   ├── Logo.tsx
│   │   ├── Navbar.tsx
│   │   ├── ProjectCard.tsx
│   │   └── SkillsGrid.tsx
│   ├── pages/          # Route pages
│   │   ├── About.tsx
│   │   └── Home.tsx
│   ├── lib/            # Utility functions
│   ├── styles/         # Global styles
│   ├── App.tsx         # Main app component
│   ├── main.tsx        # Entry point
│   └── index.css       # Global CSS
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 🎨 Features

- ✨ Futuristic design with glassmorphism effects
- 🎭 Smooth parallax scrolling animations
- 💫 Interactive particle backgrounds
- 🌈 Holographic overlays on hover
- ⚡ Lightning-fast performance with Vite
- 📱 Fully responsive design
- 🎯 SEO optimized

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd my-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

4. Set up the database:
```bash
npm run prisma:generate
npm run prisma:push
```

5. Run the development servers:
```bash
npm run dev
```

This will start:
- Client on http://localhost:3000
- Server on http://localhost:5000

## Available Scripts

### Root Directory

- `npm run dev` - Run both client and server concurrently

## 📦 Available Scripts

- `npm run dev` - Start development server on port 3000
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🚀 Deployment

This is a static site that can be deployed to any hosting service:

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag and drop the 'dist' folder to Netlify
```

### GitHub Pages
```bash
npm run build
# Push the 'dist' folder to gh-pages branch
```

## 🎯 Key Features Breakdown

### Landing Page (Home)
- Split hero section with animated 3D visuals
- Rotating tech rings and orbiting particles
- Floating technology keywords
- Social media links
- Tech stack showcase with holographic effects
- Featured projects grid

### About Page
- Professional experience timeline
- Technical expertise grid
- Achievements and education
- Interactive animations

## 📝 License

MIT License - Feel free to use this as inspiration for your own portfolio!

## 👤 Author

**Nixon See Kok Wai**
- Full-Stack Developer
- Portfolio: Coming soon
- GitHub: [Your GitHub]
- LinkedIn: [Your LinkedIn]

---

Built with ❤️ using React + Vite + TypeScript

- **Content**: MDX for blog posts
- **Validation**: Zod
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- PostgreSQL database (local or remote)

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd my-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env .env.local
```

Edit `.env.local` and add your database connection string:
```env
DATABASE_URL="postgresql://username:password@localhost:5432/portfolio"
```

4. Set up the database:
```bash
npx prisma generate
npx prisma db push
```

5. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view your site.

## Project Structure

```
my-portfolio/
├── prisma/
│   └── schema.prisma          # Database schema
├── public/
│   ├── images/                # Static images
│   └── favicon.ico
├── src/
│   ├── app/                   # Next.js App Router
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Home page
│   │   ├── about/             # About page
│   │   ├── blog/              # Blog pages
│   │   ├── projects/          # Projects page
│   │   ├── contact/           # Contact page
│   │   ├── dashboard/         # Admin dashboard
│   │   └── api/               # API routes
│   ├── components/            # Reusable components
│   ├── lib/                   # Utilities & helpers
│   ├── hooks/                 # Custom React hooks
│   ├── styles/                # Additional styles
│   └── content/               # MDX blog posts
├── package.json
├── next.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Adding Blog Posts

Create new MDX files in `src/content/blog/`:

```mdx
---
title: "Your Post Title"
date: "2024-01-01"
excerpt: "A brief description"
---

# Your Post Content

Write your content here using Markdown/MDX...
```

## Database Schema

The project includes three main models:

- **BlogPost** - For blog content
- **Project** - For portfolio projects
- **ContactMessage** - For contact form submissions

Run `npx prisma studio` to view and edit your database.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy!

### Other Platforms

This is a standard Next.js app and can be deployed to any platform that supports Node.js.

## Customization

- Update `src/app/layout.tsx` to change site metadata
- Modify `tailwind.config.ts` for theme customization
- Edit components in `src/components/` to match your design
- Update `prisma/schema.prisma` if you need different data models

## License

MIT

## Author

Your Name - [Your Website](https://yourwebsite.com)
