# Nixon See Kok Wai - Portfolio

A minimalist, modern portfolio website with a bold black and white design showcasing projects and technical expertise.

## 🚀 Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Fast build tool
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **React Router** - Client-side routing
- **Lucide React** - Icon library

## 📁 Project Structure

```
my-portfolio/
├── public/              # Static assets
│   └── hero-name.png    # Hero section image
├── src/
│   ├── components/      # Reusable components
│   │   ├── sections/    # Page sections
│   │   │   ├── HeroSection.tsx
│   │   │   ├── SkillsSection.tsx
│   │   │   └── ProjectsSection.tsx
│   │   ├── Footer.tsx
│   │   ├── Logo.tsx
│   │   ├── Navbar.tsx
│   │   ├── ProjectCard.tsx
│   │   └── SkillsGrid.tsx
│   ├── pages/          # Route pages
│   │   ├── About.tsx
│   │   ├── Blog.tsx
│   │   ├── BlogPost.tsx
│   │   └── Home.tsx
│   ├── lib/            # Utility functions
│   ├── App.tsx         # Main app component
│   ├── main.tsx        # Entry point
│   └── index.css       # Global CSS with grid pattern
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 🎨 Design Features

- ✨ **Minimal Black & White Aesthetic** - Bold, clean design with high contrast
- 🎯 **Grid Background** - Half-transparent grid pattern for visual depth
- 💫 **Interactive Cards** - Hover effects that invert colors (white → black)
- 🖼️ **Image-based Hero** - Typography as visual centerpiece
- ⚡ **Fast Performance** - Optimized with Vite
- 📱 **Fully Responsive** - Mobile-first design approach
- 🎭 **Smooth Animations** - Framer Motion for polished interactions

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/NixonSee/My-Portfolio.git
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

## 📦 Available Scripts

- `npm run dev` - Start development server on port 3000

## 📦 Available Scripts

- `npm run dev` - Start development server on port 3000
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🚀 Deployment

This is a static site that can be deployed to any hosting service:

### Vercel (Recommended)
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
# Deploy the 'dist' folder to Netlify
```

### GitHub Pages
```bash
npm run build
# Deploy the 'dist' folder to gh-pages branch
```

## 🎯 Pages Overview

### Landing Page (Home)
- **Hero Section** - Bold typography with your name as visual centerpiece
- **Decorative Elements** - Animated dots and "Available for Work" badge
- **Interactive Buttons** - `<ABOUT ME>` and `<MY WORK>` with hover animations
- **Tech Stack** - Grid of skills with black border cards that invert on hover
- **Featured Projects** - Project showcase with hover effects

### About Page
- **Professional Journey** - Introduction card with icon
- **Technical Expertise** - 4-column skills grid (Frontend, Backend, Database, Tools)
- **Professional Experience** - Timeline of work experience
- **Key Achievements** - Highlight cards with icons

### Blog Pages
- **Blog Listing** - Posts displayed in bordered cards
- **Blog Post** - Individual post view with clean typography

## 🎨 Design System

### Color Palette
- **Primary**: Black (`#000000`)
- **Background**: White (`#FFFFFF`)
- **Grid**: Semi-transparent black (`rgba(0,0,0,0.05)`)

### Typography
- **Headings**: Bold, uppercase, high tracking
- **Body**: Clean, readable with good contrast

### Components
- **Cards**: White background with 4px black borders
- **Hover Effect**: Background inverts to black, text to white
- **Icons**: Black icons that turn white on hover
- **Buttons**: Bordered with scale and rotation animations

## 📝 Customization

### Adding Your Image
Place your hero image in `public/hero-name.png` (the image with your name typography).

### Updating Content
- **Skills**: Edit `src/components/SkillsGrid.tsx`
- **Projects**: Edit `src/components/sections/ProjectsSection.tsx`
- **Experience**: Edit `src/pages/About.tsx`
- **Social Links**: Update in `src/components/Navbar.tsx` and `src/components/Footer.tsx`

## 📄 License

MIT License - Feel free to use this as inspiration for your own portfolio!

## 👤 Author

**Nixon See Kok Wai**
- Full-Stack Developer
- Email: nixonsee2006@gmail.com
- GitHub: [@NixonSee](https://github.com/NixonSee)
- LinkedIn: [Your LinkedIn]

---

Built with ❤️ using React + Vite + TypeScript + Tailwind CSS
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
