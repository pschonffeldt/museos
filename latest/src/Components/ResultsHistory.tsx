import type { ReactNode } from "react";

type MapContainerProps = {
  children?: ReactNode; // optional
};

const ResultsMap = ({ children }: MapContainerProps) => {
  return (
    <div className="results-history">
      <h2>Historia y gestión</h2>
      <ul>
        <li>
          <h3>Creación</h3>
          <p>13 de julio de 1944</p>
        </li>
        <li>
          <h3>Inauguración</h3>
          <p>9 de marzo de 1992 (nuevo edificio)</p>
        </li>
        <li>
          <h3>Director</h3>
          <p>Corina Barrera Capot (S)</p>
        </li>
      </ul>
      {children}
    </div>
  );
};

export default ResultsMap;
