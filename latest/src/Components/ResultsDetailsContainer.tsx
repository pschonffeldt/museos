import type { ReactNode } from "react";

type ResultsDetailsContainerProps = {
  children?: ReactNode; // optional
};

const ResultsDetailsContainer = ({
  children,
}: ResultsDetailsContainerProps) => {
  return <div className="results-details-container">{children}</div>;
};

export default ResultsDetailsContainer;
