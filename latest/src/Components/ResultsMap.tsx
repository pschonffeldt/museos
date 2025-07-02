import type { ReactNode } from "react";

type MapContainerProps = {
  children?: ReactNode; // optional
};

const ResultsMap = ({ children }: MapContainerProps) => {
  return (
    <div className="results-map">
      <h2>Mapa</h2>
    </div>
  );
};

export default ResultsMap;
