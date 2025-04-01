import { useLoaderData } from "react-router-dom";
import firstCharUpper from "../../services/firstCharUpper";
import TranslateDisplay from "../../services/translateDisplay";

type Faction = {
  name: string;
  colours: string[];
};

type Colour = {
  [clan: string]: Faction[];
};

export default function ColoursPage() {
  const colours = useLoaderData() as Colour;

  return (
    <main>
      <h1>Explication des couleurs</h1>

      {Object.entries(colours).map(([clan, factions]) => (
        <div key={clan}>
          <h2>{firstCharUpper(clan)}</h2>
          <ul>
            {factions.map((faction) => (
              <li key={faction.name} className="flex gap-1">
                {faction.name}:{" "}
                {faction.colours.map((colour) => (
                  <img
                    key={colour}
                    src={`/mana-${colour}.png`}
                    alt={`${colour} mana`}
                    className="h-5"
                  />
                ))}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </main>
  );
}
