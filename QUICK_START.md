# Quick Start Guide

## Initial Setup

1. **Install all dependencies:**
```bash
npm run install:all
```

2. **Set up environment variables:**

Create `server/.env`:
```env
PORT=5000
CLIENT_URL=http://localhost:3000
DATABASE_URL="postgresql://username:password@localhost:5432/portfolio"
NODE_ENV=development
```

Create `client/.env`:
```env
VITE_API_URL=http://localhost:5000/api
```

3. **Set up the database:**
```bash
npm run prisma:generate
npm run prisma:push
```

4. **Start development servers:**
```bash
npm run dev
```

The app will be running at:
- Frontend: http://localhost:3000
- Backend: http://localhost:5000

## Project Structure

```
my-portfolio/
├── client/                 # React frontend (Vite)
│   ├── src/
│   │   ├── pages/         # Home, About, Projects, Blog, Contact
│   │   ├── components/    # Navbar, Footer
│   │   ├── services/      # API client
│   │   └── lib/          # Utilities
│   ├── public/
│   ├── package.json
│   └── vite.config.ts
│
├── server/                # Node.js backend (Express)
│   ├── src/
│   │   ├── index.ts      # Entry point
│   │   ├── routes/       # API routes
│   │   ├── controllers/  # Request handlers
│   │   ├── prisma/       # Database client
│   │   └── utils/        # Helper functions
│   ├── prisma/           # Database schema
│   ├── package.json
│   └── .env
│
└── package.json          # Root scripts

```

## Useful Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Run both client and server |
| `npm run dev:client` | Run only frontend |
| `npm run dev:server` | Run only backend |
| `npm run build` | Build both for production |
| `npm run prisma:studio` | Open database GUI |

## Next Steps

1. **Customize the frontend:**
   - Edit pages in `client/src/pages/`
   - Update components in `client/src/components/`
   - Modify styles in `client/src/index.css`

2. **Add database data:**
   - Use Prisma Studio: `npm run prisma:studio`
   - Or use the API endpoints to add data

3. **Deploy:**
   - **Frontend:** Deploy `client` folder to Vercel/Netlify
   - **Backend:** Deploy `server` folder to Railway/Render

## Troubleshooting

**Port already in use:**
- Change PORT in `server/.env`
- Change port in `client/vite.config.ts`

**Database connection error:**
- Make sure PostgreSQL is running
- Check DATABASE_URL in `server/.env`

**Module not found:**
- Run `npm run install:all` again
- Delete `node_modules` folders and reinstall

Happy coding! 🚀
