import { useLoaderData } from "react-router-dom";

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
          <h2>{clan.toUpperCase()}</h2>
          <ul>
            {factions.map((faction) => (
              <li key={faction.name}>
                {faction.name}: {faction.colours.join(", ")}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </main>
  );
}
