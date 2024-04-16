export default function BaseStats({ stats }) {
  const totalBaseStat = Object.values(stats).reduce(
    (total, baseStat) => total + baseStat,
    0
  );
  return (
    <div className="base-stats">
      <h3>Base Stats</h3>
      <p>{totalBaseStat}</p>
      <div>
        {Object.entries(stats).map(([statName, baseStat]) => (
          <div key={statName}>
            <p>{statName.replace("-", " ")}</p>
            <div className={`stat ${statName}`}>
              <div
                style={{
                  width: `${(baseStat / 255) * 100}%`,
                  minWidth: `5%`,
                  height: "100%",
                }}
              >
                <p>{String(baseStat).padStart(3, "0")}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
