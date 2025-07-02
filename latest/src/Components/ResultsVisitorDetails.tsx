import type { ReactNode } from "react";

type MapContainerProps = {
  children?: ReactNode; // optional
};

const ResultsMap = ({ children }: MapContainerProps) => {
  return (
    <div className="visitors-details">
      <h2>Información para visitantes</h2>
      <h3>Transport público</h3>
      <p>Estación Cerrillos, Línea 6.</p>
      <h3>Horario</h3>
      <p>Martes a domingo de 10:00 a 17:00 (último acceso 16:30)</p>
      <h3>Otros datos</h3>
      <p>
        Estacionamientos: al exterior del museo existe un área de libre
        disposición para estacionar, para cualquier usuario o visita, pero esta
        organización no tiene ninguna responsabilidad sobre este sector.
      </p>
      <h3>Sitio web</h3>
      <a href="https://museoaeronautico.dgac.gob.cl/">Visitar sitio oficial</a>
      {children}
    </div>
  );
};

export default ResultsMap;
