# Jawon (Jellie) Han — Portfolio

Personal portfolio site hosted on GitHub Pages at the custom domain defined in `CNAME`.

## Structure

```
/
├── index.html              # Home / work grid
├── about.html              # About page
├── ShowReel.html           # ShowReel 2024 project
├── boki.html               # Boki Brand Application project
├── DDALPODO.html           # DDALPODO 3D Animation project
├── fragrantmemory.html     # Fragrant Memory (Senior Project)
├── syntaxoflove.html       # The Syntax of Love project
├── CNAME                   # Custom domain for GitHub Pages
│
├── assets/
│   ├── css/
│   │   └── style.css       # Global styles
│   ├── js/
│   │   ├── script.js       # Scroll + work filter logic
│   │   └── slideIndex.js   # Slideshow utility
│   └── images/
│       ├── logo top left.webp   # Shared nav logo
│       ├── jellielogo.gif        # Hero logo (index)
│       ├── portrait.webp         # About page photo
│       ├── ShowReel_1.gif        # ShowReel thumbnail
│       ├── fragrantmemory.webp   # Fragrant Memory thumbnail
│       ├── character.gif         # Find Your Muse thumbnail
│       ├── boki/                 # Boki project assets
│       ├── ddalpodo/             # DDALPODO project assets
│       ├── fragrantmemory/       # Fragrant Memory process assets
│       └── syntaxoflove/         # Syntax of Love process assets
│
└── videos/                 # Source/backup video files (not served by HTML)
```

## GitHub Pages Notes

- `index.html` at the root is the GitHub Pages entry point.
- `CNAME` must remain at the root for the custom domain to resolve correctly.
- All HTML pages are at the root so their URLs remain clean (e.g. `/boki.html`).
- Asset paths use relative URLs (`assets/...`) so they work both locally and on GitHub Pages.
