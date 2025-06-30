import type { ReactNode } from "react";

type SideBarProps = {
  children: ReactNode;
};

export default function SideBar({ children }: SideBarProps) {
  return <div className="sidebar">{children}</div>;
}
