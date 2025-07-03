// Imports

import ListResults from "./ListResults";

import SideBar from "./SideBar";
import "../index.css";
import ResultsContainer from "./ResultsContainer";
import { MuseumList } from "./lib/constants";
import ResultsContent from "./ResultsContent";
import Header from "./Header";
import ResultsTopBar from "./ResultsTopBar";
import ResultsType from "./ResultsType";
import ResultsDetailsContainer from "./ResultsDetailsContainer";

// Constants

// const items = [
//   "Museo Nacional Aeronáutico y del Espacio",
//   "Museo Ferroviario de Santiago",
//   "Museo Histórico Nacional",
//   "Museo de la Memoria y los Derechos Humanos",
//   "Museo de Bomberos de Santiago",
// ];

//Functions

// const buttonText = "Boton";

const handleSelectItem = (item: string) => {
  console.log(item, "tula");
};

// App

function App() {
  return (
    <div className="layout">
      <SideBar>
        <ListResults
          items={MuseumList}
          heading="Listado de Museos"
          onSelectItem={handleSelectItem}
        />
      </SideBar>

      <ResultsContainer>
        <Header />
        <ResultsTopBar children={undefined} />

        <ResultsContent>
          <ResultsDetailsContainer>
            <ResultsType />
          </ResultsDetailsContainer>
        </ResultsContent>
      </ResultsContainer>
    </div>
  );
}

export default App;

{
  /* <Button text={buttonText} /> */
}
{
  /* <Alert text="Este es un error" /> */
}
