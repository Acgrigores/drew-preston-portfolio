# Drew Preston — Economics & Legal Studies Portfolio

An interactive, skeuomorphic portfolio website designed for **Drew Preston**, an Economics student at the University of Illinois Urbana-Champaign (UIUC) pursuing a career in law (J.D. candidate).

---

## 📁 Project Overview
- **Location:** `C:\Users\acgri\.gemini\antigravity\scratch\drew-preston-portfolio`
- **Files:**
  - `index.html`: Desktop tabletop scene, binder cover, interior dossier, 3-ring binder spine, primary stationery sheet, and spilled exhibit sheet.
  - `style.css`: Rich walnut wood desk grain, navy leather binder texture, gold foil typography, multicolor tabs, 3D page turns, and spilled paper physics.
  - `script.js`: State management, binder opening/closing, tab switching, binder body click cycling, spilled paper trigger, and procedural Web Audio page-flip synthesis.

---

## ✨ Features & User Experience
1. **Top View Tabletop:** Opens to a top-down view of a classic collegiate leather binder resting on a mahogany desk with a fountain pen, brass paperclips, and an Aristotle legal quote sticky note.
2. **Cover Typography:** Embossed gold foil lettering with:
   - **Drew Preston**
   - **Economics and Legal Studies at UIUC**
3. **Multicolor Side Divider Tabs:** 5 indexed tabs protruding from the binder edge:
   - 🔴 **Academics** (Crimson / Law Burgundy)
   - 🟢 **Extracurriculars** (Forest Emerald)
   - 🔵 **Experience** (Admiralty Navy)
   - 🟠 **Projects** (Terracotta Bronze)
   - 🟡 **Awards** (UIUC Amber / Gold)
4. **Clicking Any Tab:** Opens the binder to reveal the two-page interior spread (Candidate dossier on the left; 3-ring metal mechanism in the middle; crisp legal stationery on the right).
5. **Clicking the Binder Body (Not Tabs):** Smoothly cycles forward through the 5 section tabs with 3D page flip animation and paper rustle audio.
6. **Spilling Paper Extension:** When additional casework room is needed, clicking **"Spill Out Addendum Sheet (Page 2)"** smoothly drops an exhibit addendum sheet down from the bottom of the binder onto the wooden desk.
7. **Offline Web Audio:** Realistic page flips, tab clicks, and leather binder closure sounds generated entirely in-browser via the Web Audio API (no external MP3 dependencies; includes mute button).
8. **Keyboard Navigation:** Use `ArrowRight`/`ArrowLeft` or `Space` to cycle tabs, and `Escape` to fold spilled papers or close the binder.

---

## 🚀 How to Open and View
1. Open `C:\Users\acgri\.gemini\antigravity\scratch\drew-preston-portfolio\index.html` in any modern web browser (Chrome, Edge, Firefox, Safari).
2. Or start a quick local server:
   ```bash
   cd "C:\Users\acgri\.gemini\antigravity\scratch\drew-preston-portfolio"
   python -m http.server 8000
   ```
   Then navigate to `http://localhost:8000`.
