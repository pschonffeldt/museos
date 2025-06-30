import {
  FaceIcon,
  HamburgerMenuIcon,
  MagnifyingGlassIcon,
} from "@radix-ui/react-icons";

const Header = () => {
  return (
    <nav>
      <a href="http://www.pschonffeldt.dev"></a>
      <form>
        <div>
          <HamburgerMenuIcon />
          <input
            type="text"
            placeholder="Busca museos por su nombre…"
            aria-label="Search"
          ></input>
          <MagnifyingGlassIcon />
          <button>Buscar</button>
        </div>
      </form>
    </nav>
  );
};

export default Header;
