import type { ReactNode } from "react";

type MapContainerProps = {
  children?: ReactNode; // optional
};

const ResultsMap = ({ children }: MapContainerProps) => {
  return (
    <div className="results-type">
      <h2>Tipo y colecciones</h2>
      <ul>
        <li>
          <h3>Tipo</h3>
          <p>Colecciones</p>
        </li>
        <li>
          <h3>Colecciones</h3>
          <p>
            Espacio, aeronaves y sus componentes, motores, hélices, armas,
            filatelia, fotografías, militaria, obras de arte, textiles
          </p>
        </li>
      </ul>
      {children}
    </div>
  );
};

export default ResultsMap;
