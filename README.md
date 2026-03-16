# LearnAI — Unified PWA

AI-powered learning platform with 4 apps, responsive on every device, deployable as a single PWA.

## Apps

| Route | App | Screens | Primary User |
|-------|-----|---------|--------------|
| `/` | Landing | 1 | Role selector |
| `/student` | Student App | 14 | Phone-first |
| `/tutor` | Tutor App | 11 | Tablet/Laptop |
| `/parent` | Parent App | 6 | Phone-first |
| `/admin` | Org/Admin App | 8 | Laptop-first |

## Responsive Breakpoints

- **Mobile** (<768px): Bottom tab nav, single column
- **Tablet** (768–1024px): Enhanced single column, wider cards
- **Desktop** (>1024px): Full-width layout, no phone frame constraints

## Tech Stack

- **Next.js 15** (App Router, static generation)
- **React 19** + TypeScript
- **PWA** (manifest.json, installable)
- **Vercel-ready** (zero config deploy)

## Getting Started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # Production build
npm start       # Production server
```

## Deploy to Vercel

```bash
git init && git add -A && git commit -m "Initial commit"
# Push to GitHub, then import in Vercel — auto-deploys
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout, PWA meta
│   ├── page.tsx            # Landing page (role selector)
│   ├── globals.css         # Design system, responsive breakpoints
│   ├── student/page.tsx    # Student app route
│   ├── tutor/page.tsx      # Tutor app route
│   ├── parent/page.tsx     # Parent app route
│   └── admin/page.tsx      # Org admin route
├── components/
│   ├── shared/AppShell.tsx # Responsive shell (sidebar/bottom nav)
│   ├── StudentApp.tsx      # 14-screen student prototype
│   ├── TutorApp.tsx        # 11-screen tutor prototype
│   ├── ParentApp.tsx       # 6-screen parent prototype
│   └── OrgApp.tsx          # 8-screen org admin prototype
public/
└── manifest.json           # PWA manifest
```

## Bundle Sizes

| Route | Page Size | First Load |
|-------|-----------|------------|
| Landing | 1.4 kB | 104 kB |
| Student | 14.9 kB | 117 kB |
| Tutor | 14.1 kB | 116 kB |
| Parent | 6.4 kB | 109 kB |
| Admin | 7.0 kB | 109 kB |

## License

MIT
