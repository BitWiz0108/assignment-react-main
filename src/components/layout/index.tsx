import React from "react";
import Sidebar from "./Sidebar";
interface IProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: IProps) => {
  return <Sidebar>{children}</Sidebar>;
};
