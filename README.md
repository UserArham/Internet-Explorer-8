# Internet Explorer 8 (HTML5)

This project is a **standalone Internet Explorer 8 browser mimic**, implemented entirely in **HTML, CSS, and JavaScript**.  

It replicates the **look and feel of Internet Explorer 8**, including:

- Multi-tab browsing
- Circular SVG **Back/Forward buttons**
- Address bar with working navigation
- **New Tab** functionality
- **Google search integration**
- **InPrivate mode**
- Tab close buttons with dynamic labels (`Google` / `New Tab`)
- Keyboard shortcuts:
  - `Ctrl+T` → Open new tab  
  - `Ctrl+W` → Close current tab  
  - `Ctrl+Tab` → Switch to next tab

All functionality runs **locally in your browser**, no server required.

---

## Usage

1. Save the HTML file, for example `index.html`.
2. Open the file in your **default web browser** by double-clicking it or dragging it into a browser window.
3. Interact with the tabs, address bar, and buttons as if you were using Internet Explorer 8.

---

## Features

### Tabs

- Click **New Tab** to open a new page (`New Tab` label).  
- **Close buttons** on tabs allow you to close tabs individually.  
- The first tab (`Google`) cannot be closed if it's the last remaining tab.

### Navigation

- **Back** and **Forward** buttons are circular SVGs, fully functional.  
- **Refresh** and **Home** buttons.  
- Address bar accepts any URL; press Enter to navigate.

### Search

- Enter a query in the address bar and click the **Google button** to search.  
- Loads results inside the main iframe.

### InPrivate Mode

- Toggle **InPrivate** mode with the button.  
- Changes the theme to dark for privacy simulation.

### Keyboard Shortcuts

| Shortcut | Action                  |
|----------|------------------------|
| Ctrl+T   | Open new tab            |
| Ctrl+W   | Close current tab       |
| Ctrl+Tab | Switch to next tab      |

---

## Technical Details

- Uses **xp.css** for classic Windows XP/IE8 style.  
- Back/Forward buttons are **SVG circles** for crisp scaling.  
- Each tab maintains **separate navigation history**.  
- Fully contained in **one HTML file** with embedded CSS and JavaScript.  
- No external dependencies other than a web browser.

---

## Notes

- This project is a **browser mimic**, not a real browser.  
- All navigation is done within an **iframe** inside your browser.  
- Works best on modern browsers for rendering, but preserves **IE8-style appearance**.  
- **No installation required** — just open the HTML file.

---

## License
??????
---

## Screenshot 
<img src="https://upload.wikimedia.org/wikipedia/en/e/eb/Internet_Explorer_8.png" alt="Internet Explorer 8 - Wikipedia"/>
