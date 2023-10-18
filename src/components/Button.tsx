import { useContext } from "react";
import UserContext from "@/context/UserContext";

const BUTTON_TEXT = {
  login: "Login",
  logout: "Logout",
};

export const Button = () => {
  const context = useContext(UserContext);

  return (
    <button
      type="submit"
      className={`p-2 border-2 border-solid border-${
        context.state.authorized ? "red-500" : "emerald-500"
      } rounded text-${context.state.authorized ? "red-500" : "emerald-500"}`}
    >
      {context.state.authorized ? BUTTON_TEXT.logout : BUTTON_TEXT.login}
    </button>
  );
};
