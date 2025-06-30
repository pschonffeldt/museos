import type { ReactNode } from "react";

type ResultsContainerProps = {
  children: ReactNode;
};

export default function ResultsContainer({ children }: ResultsContainerProps) {
  return <div className="results-container">{children}</div>;
}
