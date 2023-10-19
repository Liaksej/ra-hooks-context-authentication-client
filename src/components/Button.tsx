import { FC, useContext } from "react";
import UserContext from "@/context/UserContext";

const BUTTON_TEXT = {
  login: "Login",
  logout: "Logout",
};

interface ButtonProps {
  onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({ onClick }) => {
  const context = useContext(UserContext);

  return (
    <button
      type="submit"
      className={`p-2 border-2 border-solid rounded ${
        context.state.authorized
          ? "border-red-500 text-red-500"
          : "border-emerald-500 text-emerald-500"
      }`}
      onClick={onClick}
    >
      {context.state.authorized ? BUTTON_TEXT.logout : BUTTON_TEXT.login}
    </button>
  );
};
