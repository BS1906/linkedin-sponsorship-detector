# LinkedIn Sponsorship Detector 🔎

A lightweight Chrome extension that automatically detects whether a LinkedIn job posting mentions visa sponsorship and displays a clear badge on the page.

---

## 🚀 Why I Built This

As someone actively applying for jobs, I noticed that LinkedIn does not provide a filter for visa sponsorship status.

Many job descriptions include phrases like:
- “No visa sponsorship”
- “Must be authorized to work”
- “Sponsorship available”

But you have to manually read through every job description to figure that out.

So I built a simple browser extension that scans the job description and instantly classifies it as:

- ❌ NO SPONSORSHIP
- ✅ SPONSORSHIP PROVIDED
- ⚠️ NOT MENTIONED

---

## 🧠 How It Works

- The extension runs only on `/jobs/` pages.
- It detects the job description using multiple DOM selectors (to support LinkedIn's dynamic layouts).
- It scans the text for sponsorship-related keywords.
- It dynamically injects a visual badge on the page.
- It uses a `MutationObserver` to handle LinkedIn’s Single Page Application (SPA) behavior.

---

## 🛠 Tech Stack

- JavaScript (Vanilla JS)
- Chrome Extension Manifest V3
- DOM MutationObserver
- Dynamic Content Injection
- GitHub

---

## 📦 Project Structure

linkedin-sponsorship-detector/
│
├── manifest.json
├── content.js
├── styles.css

---

## 🔎 Detection Logic

The script searches for patterns such as:

### No Sponsorship Examples:
- "no visa sponsorship"
- "cannot provide visa sponsorship"
- "must be authorized to work without sponsorship"

### Sponsorship Provided Examples:
- "visa sponsorship available"
- "we sponsor H1B"
- "sponsorship provided"

If no pattern is found → it defaults to **Not Mentioned**.

---

## ⚡ Features

- Works on all LinkedIn job layouts (including new SDUI rendering)
- Handles dynamic job switching without page refresh
- Lightweight and fast
- Clean badge UI
- Runs only on job pages

---

## 📌 Disclaimer

This extension scans visible job description text only.  
It does not access LinkedIn APIs or modify backend systems.

---

## 🙌 Contributions

This is a personal project built to solve a real-world problem.  
Feedback and suggestions are welcome!

