## PWHL Standings Bot
- By Cooper Joslin :)
- cooperjoslin.com

## Requirements

- macOS
- Übersicht https://tracesof.net/uebersicht/
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
5. If you want, you can move the /imgs folder to /pwhl-standings-bot as well, and update the path appropriately.
6. Refresh Übersicht
7. Root for anyone but the Frost :)

Like this widget? I'm glad! A trans person made this and you should absolutely support trans inclusion in the PWHL. Learn more about trans inclusion in sports here: https://www.genderjustice.us/toolkits/trans-inclusion-sports/

And if you really like this widget and want to throw a tip my way, please send that to the Gender Justice folks instead. They need it more right now: https://www.genderjustice.us/donate/