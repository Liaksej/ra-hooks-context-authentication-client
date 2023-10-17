import { useContext } from "react";
import UserContext from "@/context/UserContext";

interface HeaderProps {}

export const Header = () => {
  const user = useContext(UserContext);
  return null;
};
