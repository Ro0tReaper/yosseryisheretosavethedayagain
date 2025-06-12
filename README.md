# 🕵️‍♂️ CyberNotes | Red Team Notes Hub 🔍

Welcome to **CyberNotes**, the suspiciously secure and slightly shady corner of the internet made *by students, for students* to **host, organize, and access cybersecurity and networking course notes**.

> "Let us pass together" — the Portal

---

## 🚀 Project Overview

CyberNotes is a **Next.js + TailwindCSS + TypeScript** project built to serve as a clean, tech-themed dashboard for students who take cybersecurity seriously — but not too seriously.

- ⚙️ Features a **fun identity clearance** screen (blacklist protection included 🔐)
- 🧾 Hosts notes for popular certs and programs like:
  - CRTP, OSWA, eJPT (with Notion links)
  - CCNAv7 (rendered & styled inside the app)
  - eMAPT (under construction 🛠️)
- 📚 Local Markdown/HTML note rendering for easy editing
- 🤝 “Support Author” section linking to your socials

---

## ✨ Tech Stack

| Tech         | Role                            |
|--------------|---------------------------------|
| [Next.js](https://nextjs.org/) | React-based Framework           |
| [Tailwind CSS](https://tailwindcss.com/) | UI Styling                     |
| TypeScript   | Static typing & safety          |
| Notion       | External linked note support    |
| Local Markdown/HTML | Embedded CCNA notes          |

---

## 🛡️ Identity Check

Before accessing the dashboard, users must:
1. Enter a name
2. Avoid **blacklisted names** to pass my app
3. If they pass, they’ll be humorously warned by the app 🤭

---

## 📁 Project Structure

```bash
/pages
  ├── index.tsx          # Clearance check & welcome
  ├── dashboard.tsx      # Main dashboard with cards
  ├── ccnav7.tsx         # Embedded course notes (styled HTML)
  
/lib
  └── readText.ts        # Reads local summary HTML files

/pages/summarise/
  └── mod1.html - mod16.html  # Each module’s summary (styled HTML)
