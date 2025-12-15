## Requirements

- macOS
- Übersicht
- Node.js 18+
- Puppeteer

## Setup

1. Clone or download this repo
2. Move `pwhl-standings.widget` into your Übersicht widgets folder:
   ~/Library/Application Support/Übersicht/widgets/
3. Move `pwhl-standings-bot` anywhere else not in that widgets folder:
   ~Documents/pwhl-standings-bot/
4. Open `index.jsx` and update this line to your path:
   const SCRAPER_PATH = "$HOME/pwhl-standings-bot/scraper.js";
6. Refresh Übersicht
7. Root for anyone but the Frost :)