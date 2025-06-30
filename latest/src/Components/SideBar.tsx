import { ReactNode } from "react";

type SideBarProps = {
  children: ReactNode;
};

export default function SideBar({ children }: SideBarProps) {
  return <div>{children}</div>;
}
