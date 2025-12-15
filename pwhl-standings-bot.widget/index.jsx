const NODE_PATH = "/opt/homebrew/bin/node";
const SCRAPER_PATH = "$HOME/Documents/Sites/pwhl-standings-bot-js/";

export const refreshFrequency = 1000 * 60 * 120;
export const command = `${NODE_PATH} ${SCRAPER_PATH}`;

export function render({ output, error }) {
  if (error) return <div style={styles.error}>⚠ Error: {String(error)}</div>;
  if (!output) return <div style={styles.loading}>Loading PWHL Standings…</div>;

  let data;
  try {
    data = JSON.parse(output);
  } catch (e) {
    return <div style={styles.error}>⚠ Error parsing standings JSON</div>;
  }

  if (!Array.isArray(data) || data.length === 0) {
    return <div style={styles.error}>⚠ No standings data available</div>;
  }

  return (
    <div style={styles.container}>
      <div style={styles.header}>PWHL Standings</div>
      <div style={styles.table}>
        {data.map(team => (
          <div key={team.team} style={styles.row}>
            <div style={styles.rank}>{team.rank}</div>
            <div style={styles.logoContainer}>
              <img
                src={`https://raw.githubusercontent.com/coopjoslin/pwhl-standings-widget/refs/heads/main/imgs/${team.team}.png`}
                alt={team.name}
                style={styles.logo}
              />
            </div>
            <div style={styles.name}>{team.name}</div>
            <div style={styles.stats}>{team.rw}</div>      {/* Wins */}
            <div style={styles.stats}>{team.gp - team.rw}</div> {/* Losses (GP - RW) */}
            <div style={styles.points}>{team.pts}</div>    {/* Total Points */}
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "12px 16px",
    background: "rgba(0,0,0,0.6)",
    backdropFilter: "blur(10px)",
    borderRadius: "12px",
    color: "#fff",
    fontFamily: "-apple-system, Helvetica, sans-serif",
    width: "320px",
  },
  header: {
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "8px",
    borderBottom: "1px solid rgba(255,255,255,0.3)",
    paddingBottom: "4px",
    textAlign: "center",
  },
  table: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },
  row: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "4px 0",
  },
  rank: { width: "24px", fontWeight: "bold", color: "#FFD04A", textAlign: "center" },
  logoContainer: { width: "28px", height: "28px" },
  logo: { width: "28px", height: "28px", borderRadius: "4px", objectFit: "contain" },
  name: { flex: 1, fontWeight: "500" },
  stats: { width: "32px", textAlign: "center" },
  points: { width: "36px", textAlign: "center", fontWeight: "bold", color: "#FFD04A" },
  loading: { color: "#ddd", textAlign: "center" },
  error: { color: "#ff6b6b", fontWeight: "bold", textAlign: "center" },
};