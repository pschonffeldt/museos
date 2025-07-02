import type { ReactNode } from "react";

type MapContainerProps = {
  children?: ReactNode; // optional
};

const ResultsMap = ({ children }: MapContainerProps) => {
  return (
    <div className="results-map">
      <h2>Mapa</h2>
      <iframe
        src="https://www.google.com/maps/d/embed?mid=14jhDKUBm-_vNZ0z0Mw97JKX2C7n0_MQ&ehbc=2E312F"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default ResultsMap;
