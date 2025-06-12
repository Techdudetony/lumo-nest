# 🧠 LumoNest

This is a [Next.js](https://nextjs.org) application bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

**LumoNest** is a modular, responsive, and modern frontend experience that serves as a central hub for curated content — including educational articles, mindful activities, and local resources — delivered through a polished, tile-based interface inspired by Apple Vision UI aesthetics.

---

## 🚀 Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app in action.

This project supports hot reloading. You can begin editing by modifying:

```
app/page.tsx
```

---

## ✨ Features

- ✅ Built with **Next.js App Router**
- ✅ Minimal, responsive **tile-based UI**
- ✅ **Custom SVG/PNG icons** with gradient glow styling
- ✅ Optimized font loading via [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) (using [Geist](https://vercel.com/font))
- ✅ Environment config via `.env` for scalable deployments
- ✅ Cleanly integrated with GitHub version control
- 🔒 Login/authentication system — _coming soon_

---

## 🗂 Project Structure

```bash
/app
  ├── components/        # Reusable UI components
  ├── page.tsx           # Root homepage
/public
  ├── icons/             # Custom transparent icons
/styles
  └── globals.css        # Global styles and variables
.env                     # Environment config
```

---

## 🛆 Tech Stack

- **Framework:** [Next.js](https://nextjs.org) 15.x (App Router)
- **Styling:** Tailwind CSS
- **Fonts:** Geist by Vercel
- **Hosting:** [Vercel](https://vercel.com)
- **Version Control:** Git + GitHub

---

## 📘 Resources

- [Next.js Documentation](https://nextjs.org/docs)  
- [Learn Next.js Interactive Course](https://nextjs.org/learn)  
- [Deploy with Vercel](https://vercel.com/new)

---

## ☁️ Deployment

This app is optimized for one-click deployment on [Vercel](https://vercel.com):

> 📌 Ensure you have your environment variables set in the Vercel dashboard under Project Settings → Environment Variables.

---

## 🚣 Roadmap

- [x] Initial layout + component structure
- [x] Feature tile interface with visual polish
- [x] Custom transparent PNG icon set
- [x] GitHub repository setup
- [ ] Authentication & user-specific content
- [ ] Rich markdown-based article system

---

## 👨‍💻 Author

**Antonio Lee**  
[GitHub – @techdudetony](https://github.com/techdudetony)  
[Portfolio](https://antoniolee.vercel.app)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
