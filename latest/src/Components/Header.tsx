import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import Button from "./Button";

const Header = () => {
  return (
    <nav className="header">
      <div className="search-container">
        <form>
          <input
            className="search-input"
            // type="text"
            placeholder="Busca museos por su nombre…"
            aria-label="Search"
          ></input>
          {/* <Button text={"Buscar"} /> */}
        </form>
      </div>
      <div className="donation-container">
        <Button text={"Donar"} />
        <Button text={"Compartir"} />
        <Button text={"Estadísticas"} />
      </div>
    </nav>
  );
};

export default Header;
