import "./App.css";

export default function App() {
  const kortit = [
    {
      id: 1,
      nimi: "Llanowar elves",
      maara: 3,
      hinta: 8,
      setti: "unlimited",
      img: "./images/60797-llanowar-elves.jpg",
    },
    {
      id: 2,
      nimi: "Artifact mutation",
      maara: 1,
      hinta: 0.8,
      setti: "Invasion",
      img: "./images/20688-artifact-mutation.jpg",
    },
    {
      id: 3,
      nimi: "Aura mutation",
      maara: 1,
      hinta: 1.5,
      setti: "Invasion",
      img: "./images/21239-aura-mutation.jpg",
    },
    {
      id: 4,
      nimi: "Gaeas blessing",
      maara: 3,
      hinta: 1.1,
      setti: "Weatherlight",
      img: "./images/45862-gaeas-blessing.jpg",
    },
    {
      id: 5,
      nimi: "Sterling grove",
      maara: 1,
      hinta: 3,
      setti: "Invasion",
      img: "./images/90234-sterling-grove.jpg",
    },
    {
      id: 6,
      nimi: "Verduran enchantress",
      maara: 3,
      hinta: 4,
      setti: "Fourth edition",
      img: "./images/99990-verduran-enchantress.jpg",
    },
    {
      id: 7,
      nimi: "Recall",
      maara: 2,
      hinta: 0.75,
      setti: "Fifth edition",
      img: "./images/77746-recall.jpg",
    },
    {
      id: 8,
      nimi: "CounterSpell",
      maara: 7,
      hinta: 1.75,
      setti: "Mercadian masques",
      img: "./images/31635-counterspell.jpg",
    },
    {
      id: 9,
      nimi: "CounterSpell",
      maara: 7,
      hinta: 1.5,
      setti: "Tempest",
      img: "./images/31639-counterspell.jpg",
    },
    {
      id: 10,
      nimi: "Apocalypse",
      maara: 2,
      hinta: 5.5,
      setti: "Tempest",
      img: "./images/19703-apocalypse.jpg",
    },
    {
      id: 11,
      nimi: "Helm of awakening",
      maara: 1,
      hinta: 2,
      setti: "Visions",
      img: "./images/51849-helm-of-awakening.jpg",
    },
    {
      id: 12,
      nimi: "Earthquake",
      maara: 1,
      hinta: 58,
      setti: "Unlimited edition",
      img: "./images/38815-earthquake.jpg",
    },
    {
      id: 13,
      nimi: "Quirion ranger",
      maara: 2,
      hinta: 1,
      setti: "Visions",
      img: "./images/76338-quirion-ranger.jpg",
    },
    {
      id: 14,
      nimi: "Elvish spirit guide",
      maara: 4,
      hinta: 8,
      setti: "Alliances",
      img: "./images/39884-elvish-spirit-guide.jpg",
    },
    {
      id: 15,
      nimi: "Force of nature",
      maara: 1,
      hinta: 2.1,
      setti: "revised edition",
      img: "./images/44702-force-of-nature.jpg",
    },
    {
      id: 16,
      nimi: "Wirewood symbiote",
      maara: 1,
      hinta: 2,
      setti: "Scourge",
      img: "./images/103800-wirewood-symbiote.jpg",
    },
    {
      id: 21,
      nimi: "Grave pact",
      maara: 2,
      hinta: 14,
      setti: "Stronghold",
      img: "./images/49392-grave-pact.jpg",
    },
    {
      id: 17,
      nimi: "Doomsday",
      maara: 1,
      hinta: 8.75,
      setti: "Sixth edition",
      img: "./images/36969-doomsday.jpg",
    },
    {
      id: 18,
      nimi: "Hanna, ships navigator",
      maara: 1,
      hinta: 2,
      setti: "Invasion",
      img: "./images/50990-hanna-ships-navigator.jpg",
    },
    {
      id: 19,
      nimi: "Arcanis the omnipotent",
      maara: 1,
      hinta: 1.1,
      setti: "Onslaught",
      img: "./images/19965-arcanis-the-omnipotent.jpg",
    },
    {
      id: 20,
      nimi: "Instill energy",
      maara: 3,
      hinta: 0.75,
      setti: "Revised",
      img: "./images/54845-instill-energy.jpg",
    },
  ];
  return (
    <main>
      <h1 className="header">Lisäkortit</h1>
      <div className="wrapper">
        {kortit.map((kortti) => {
          return (
            <div key={kortti.id} className="card">
              <h2>{kortti.nimi}</h2>
              <img
                src={require(`${kortti.img}`)}
                width="300"
                height="400"
                alt={kortti.nimi}
              />
              <p>Mistä setistä: {kortti.setti}</p>
              <p>Montako varastossa: {kortti.maara}</p>
              <p>Kappale hinta: {kortti.hinta.toFixed(2)} €</p>
            </div>
          );
        })}
      </div>
    </main>
  );
}
