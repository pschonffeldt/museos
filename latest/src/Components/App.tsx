// Imports

import ListResults from "./ListResults";
import Alert from "./Alert";
import Button from "./Button";

// Constants

const items = [
  "Museo Nacional Aeronáutico y del Espacio",
  "Museo Ferroviario de Santiago",
  "Museo Histórico Nacional",
  "Museo de la Memoria y los Derechos Humanos",
  "Museo de Bomberos de Santiago",
];

//Functions

const buttonText = "Cambiar el color del boton";

const handleSelectItem = (item: string) => {
  console.log(item);
};

// App

function App() {
  return (
    <div>
      <Alert text="Este es un error" />
      <Button text={buttonText} />
      <ListResults
        items={items}
        heading="Listado de Museos"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
