import type { ReactNode } from "react";

type MapContainerProps = {
  children: ReactNode;
};

export default function MapContainerProps({ children }: MapContainerProps) {
  return <div className="results-content">{children}</div>;
}
