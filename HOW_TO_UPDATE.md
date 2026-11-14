# 📘 How to Update the Website

This website is designed so that **anyone can easily update it without writing any code**.

All the text, grades, work experiences, projects, awards, and links are stored in one single file:
👉 **`portfolio-data.json`**

You can open this file in any text editor (Notepad, VS Code, TextEdit, etc.), make your changes, and save it. The website will automatically update!

---

## 🧭 Quick Guide: Where to Find Things

Open `portfolio-data.json`. The file is organized into two main parts:

1. **`personalInfo`** (at the very top)
   - Your name, school, GPA, graduation year, email, LinkedIn, location, and bio.
2. **`sections`** (below `personalInfo`)
   - **`academics`**: Degree, GPA, coursework, case study notes.
   - **`extracurriculars`**: Clubs, fraternities (Phi Alpha Delta), student leadership.
   - **`experience`**: Jobs, internships, seasonal roles (Lifeguard, Bakery, etc.).
   - **`projects`**: Papers, research studies, capstones.
   - **`awards`**: Honors, Employee of the Year, Dean's List.

---

## ✏️ Examples of Common Updates

### 1. Updating Your GPA or Graduation Year
Find the top `personalInfo` section:
```json
"graduationYear": "2028",
"gpa": "3.89",
```
Change the number inside the quotes and save!

---

### 2. Updating Contact Info & LinkedIn
In `personalInfo`:
```json
"email": "drewpreston23@gmail.com",
"linkedinUrl": "https://www.linkedin.com/in/drew-preston-788080412/",
"linkedinDisplay": "linkedin.com/in/drew-preston",
"location": "Champaign, IL • Mundelein, IL"
```
Just replace the text inside the quotation marks `"..."`.

---

### 3. Adding a New Job or Project Entry
To add a new item under **experience**, **projects**, or **awards**, copy and paste an entry block inside `"entries": [ ... ]`:

```json
{
  "title": "Summer Legal Intern",
  "date": "Summer 2027",
  "subtitle": "Chicago Law Firm",
  "description": "Assisted litigation attorneys with legal discovery and document synthesis.",
  "highlights": [
    "Researched antitrust precedent under Section 1 of the Sherman Act.",
    "Drafted client memoranda and case briefs."
  ],
  "tags": [
    "Litigation",
    "Legal Research",
    "Antitrust"
  ]
}
```

> ⚠️ **Important tip:** If you are adding a new entry after an existing one, make sure to put a comma `,` after the closing brace `}` of the previous entry.

---

### 4. Updating the Spilled Addendum Notes
Every section has an automatic spilled paper (`spilledExhibit`) at the bottom. You can change the title and the notes inside `"memos": [ ... ]`:

```json
{
  "heading": "Your Note Title",
  "body": "Your detailed explanation, case brief, or description here."
}
```

---

## 🚦 Three Golden Rules for Editing JSON
JSON is very simple, but it expects a few basic formatting rules:

1. **Keep the quotation marks**: All text should always be inside double quotes: `"like this"`.
2. **Use commas between items**: When listing multiple items, separate them with a comma `,`.
3. **No comma after the very last item**: The last item in a list or section does not need a comma at the end.

---

## 🚀 Publishing Your Changes to GitHub
When you are done editing `portfolio-data.json`:
1. Save the file.
2. In your terminal/Git tool, commit and push:
   ```bash
   git add portfolio-data.json
   git commit -m "Update portfolio information"
   git push
   ```
3. GitHub Pages will automatically publish the new version in 1–2 minutes!
