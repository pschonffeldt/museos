// Imports

import ListResults from "./ListResults";
// import Alert from "./Alert";
// import Button from "./Button";
import SideBar from "./SideBar";
import "../index.css";
import ResultsContainer from "./ResultsContainer";
import { MuseumList } from "./lib/constants";
import ResultsContent from "./ResultsContent";
import Header from "./Header";

// Constants

// const items = [
//   "Museo Nacional Aeronáutico y del Espacio",
//   "Museo Ferroviario de Santiago",
//   "Museo Histórico Nacional",
//   "Museo de la Memoria y los Derechos Humanos",
//   "Museo de Bomberos de Santiago",
// ];

//Functions

// const buttonText = "Cambiar el color del boton";

const handleSelectItem = (item: string) => {
  console.log(item);
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
        {/* <Button text={buttonText} /> */}
        {/* <Alert text="Este es un error" /> */}
        <ResultsContent />
      </ResultsContainer>
    </div>
  );
}

export default App;
