import { useContext } from "react";
import UserContext from "@/context/UserContext";
import { MainUnauthorized } from "@/components/MainUnauthorized";
import { MainAuthorized } from "@/components/MainAuthorized";

export const Main = () => {
  const user = useContext(UserContext);
  return (
    <main>
      {user.state.authorized ? <MainAuthorized /> : <MainUnauthorized />}
    </main>
  );
};
