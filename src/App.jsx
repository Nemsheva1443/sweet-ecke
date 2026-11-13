import { useState } from "react";
import { NavbarPublic } from "./components/navbar/navbar.public.comp.jsx";
import { Cake } from "./cake.jsx";
import "./App.css";
import "./index.css";
import { Deco } from "./tortendeco.jsx";

export default function App() {
  const [taste, setTaste] = useState("schokoladen");
  const [deco, setDeco] = useState("kerzen");
  const [addedDeco, setAddedDeco] = useState("");

  return (
    <>
      <NavbarPublic />

      <main className="cake-layout">
     
        <div className="cake-photo">
          <Cake name={taste} />
        </div>

    
        <div className="cake-settings text-center">
          <h1 className="text-3xl font-bold">
            Deine Wunschtorte
          </h1>

          <label>
            Geschmack
            <select
              className="select w-full text-left"
              value={taste}
              onChange={(event) => setTaste(event.target.value)}
            >
              <option value="schokoladen">Schokolade</option>
              <option value="vanille">Vanille</option>
              <option value="erdbeere">Erdbeere</option>
            </select>
          </label>

          <label>
            Wähle deine Deko
            <select
              className="select w-full text-left"
              value={deco}
              onChange={(event) => setDeco(event.target.value)}
            >
              <option value="kerzen">Kerzen</option>
              <option value="beeren">Beeren</option>
              <option value="schokostreusel">Schokostreusel</option>
              <option value="buntesteusel">Bunte Streusel</option>
            </select>
          </label>

          <button
            type="button"
            className="btn button-deco"
            onClick={() => setAddedDeco(deco)}
          >
            Deko hinzufügen
          </button>

          <div>
          <span>Deine Dekoration:</span>
          <Deco deconame={addedDeco} />
          </div>
          <label>
            Dein Wunschtext
            <input
              type="text"
              placeholder="Alles Gute, Anna!"
              className="input w-full text-left"
            />
          </label>

        
        </div>
      </main>
    </>
  );
}

