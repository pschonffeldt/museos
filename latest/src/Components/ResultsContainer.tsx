import type { ReactNode } from "react";

type ResultsContainerProps = {
  children: ReactNode;
};

export default function ResultsContainer({ children }: ResultsContainerProps) {
  return <main className="results-container">{children}</main>;
}
