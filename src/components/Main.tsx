import { useContext } from "react";
import UserContext from "@/context/UserContext";

interface MainProps {}

export const Main = () => {
  const user = useContext(UserContext);
  return null;
};
