export default function FlavorText({ flavorText }) {
  let randomNum;
  if (flavorText && flavorText.length > 0) {
    randomNum = Math.floor(Math.random() * flavorText.length);
  }
  return (
    <div className="flavor-text">
      <h3>{flavorText[randomNum].version.name.replace(/-/g, " ")}</h3>
      <p>{flavorText[randomNum].flavor_text.replace(/\f/g, " ")}</p>
    </div>
  );
}
