const puppeteer = require("puppeteer");

(async () => {
  try {
    const url =
      "https://www.thepwhl.com/en/stats/standings?standingstype=league&context=overall&specialteams=false&season=8&sortkey=points&league=1";

    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();

    await page.goto(url, { waitUntil: "domcontentloaded" });

    await page.waitForFunction(
      () => document.querySelectorAll("table.ht-table tbody tr").length > 0,
      { timeout: 60000 }
    );

    const standings = await page.evaluate(() => {
      return [...document.querySelectorAll("table.ht-table tbody tr")]
        .map(row => {
          const c = [...row.querySelectorAll("td, th")].map(td =>
            td.innerText.trim()
          );
          return {
            rank: c[0],
            team: c[2],
            name: c[3] || "",
            gp: c[4],
            gr: c[5],
            pts: c[6],
            rw: c[7],
            otw: c[8]
          };
        })
        .filter(t => t.rank && t.team);
    });

    console.log(JSON.stringify(standings));

    await browser.close();
  } catch (err) {
    console.error("Error scraping PWHL standings:", err);
    process.exit(1);
  }
})(); 