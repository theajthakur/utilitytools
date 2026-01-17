# UtilityTools.tech ⚡

**UtilityTools.tech** is a collection of fast, free, and privacy-first web utilities that run entirely in your browser.

No sign-ups.  
No servers.  
No tracking.  

Just tools that work.

---

## ✨ What is UtilityTools?

UtilityTools is a **frontend-only web app** that provides commonly used daily tools such as text utilities, developer helpers, and format converters — all running **100% client-side**.

Your data never leaves your browser.

This project is built with simplicity, speed, and usability in mind.

---

## 🎯 Why this project exists

Most utility websites today suffer from:
- Forced login/signup
- Ads & tracking
- Slow, bloated pages
- Uploading sensitive data to servers

**UtilityTools fixes that** by following three core principles:

1. **Privacy first** – Everything runs locally  
2. **Instant usage** – Open and use, no friction  
3. **Minimal UI** – Focus on the task, not distractions  

---

## 🧰 Available & Planned Tools

### 📝 Text Utilities
- Case Converter
- Word & Character Counter
- Remove Extra Spaces
- Text Diff Checker

### 👨‍💻 Developer Tools
- JSON Formatter / Validator
- Base64 Encode / Decode
- JWT Decoder
- URL Encoder / Decoder
- Regex Tester

### 🖼 Media & File Tools
- Image Compressor
- Image Resizer
- CSV → JSON Converter
- File Size Calculator

### 🎨 Color & UI Tools
- Color Picker
- HEX ↔ RGB Converter
- Contrast Checker
- Gradient Generator

> Each tool lives on its own page for better SEO and performance.

---

## ⌨️ Power Features

- **⌘ / Ctrl + K Command Search**
- **Light / Dark Mode**
- **Keyboard-friendly UI**
- **Responsive on all devices**
- **Accessible (WCAG-aware)**

---

## 🏗 Tech Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **State:** Local React state
- **Theme:** CSS variables + next-themes
- **Package Manager:** pnpm
- **Fonts:** Inter + JetBrains Mono

---

## 🚀 Architecture Philosophy

- No backend
- No authentication
- No database
- No API calls for core functionality

Most tools are implemented using:
- Native browser APIs
- Web Workers (where applicable)
- Optimized client-side logic

This keeps the app:
- Fast
- Cheap to host
- Easy to maintain
- Secure by design

---

## 🧑‍💻 Local Development

\`\`\`bash
# install dependencies
pnpm install

# start dev server
pnpm dev
\`\`\`

Open:
\`\`\`
http://localhost:3000
\`\`\`

---

## 📁 Project Structure (simplified)

\`\`\`
app/
 ├─ tools/
 │   ├─ json-formatter/
 │   ├─ base64/
 │   └─ case-converter/
 ├─ layout.tsx
 └─ page.tsx

components/
 ├─ navbar.tsx
 ├─ command-search.tsx
 └─ ui/

styles/
 └─ globals.css
\`\`\`

---

## 🧭 Roadmap

- [ ] More daily-use tools
- [ ] Tool categories & filters
- [ ] Offline support (PWA)
- [ ] Recently used tools
- [ ] Shareable tool links
- [ ] Keyboard shortcuts per tool

---

## 🤝 Contributing

Contributions are welcome!

You can help by:
- Adding new tools
- Improving UI/UX
- Fixing bugs
- Improving accessibility
- Writing documentation

Please keep contributions:
- Client-side only
- Simple & readable
- Privacy-first

---

## 📜 License

MIT License  
Free to use, modify, and distribute.

---

## ❤️ Final Note

UtilityTools is built for:
- Developers
- Students
- Designers
- Anyone who just wants tools to work without friction

If you find this useful, consider ⭐ starring the repo.

Happy building 🚀
