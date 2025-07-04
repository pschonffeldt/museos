// src/Components/App.tsx
import { useState } from "react";
import SideBar from "./SideBar";
import ListResults from "./ListResults";
import Header from "./Header";
import MuseumInfo from "./MuseumInfo";
import Button from "./Button";
import { fetchMuseosByName } from "./lib/hooks";
import { MuseumList, type Museo } from "./lib/constants";

export default function App() {
  const [query, setQuery] = useState(""); // controlled input
  const [museo, setMuseo] = useState<Museo | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault(); // stop page reload
    setError(null);
    try {
      const results = await fetchMuseosByName(query);
      if (results.length === 0) {
        setMuseo(null);
        setError(`No se encontró museo llamado “${query}”`);
      } else {
        setMuseo(results[0]); // take the first match
      }
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="layout">
      <SideBar>
        <ListResults
          items={MuseumList}
          heading="Listado de Museos"
          onSelectItem={(item) => setQuery(item)} // clicking a list item populates input
        />
      </SideBar>

      <main className="main-content">
        <Header>
          {/* move the search form into your Header, pass props */}
          <form onSubmit={handleSearch}>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Busca museos por su nombre…"
            />
            <Button text="Buscar" />
          </form>
        </Header>

        {error && <p style={{ color: "crimson" }}>{error}</p>}

        {museo && <MuseumInfo museo={museo} />}
      </main>
    </div>
  );
}
