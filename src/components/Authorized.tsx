import { useContext } from "react";
import UserContext from "@/context/UserContext";
import { Button } from "@/components/Button";

const HELLO_TEXT = "Hello, ";

export const Authorized = () => {
  const context = useContext(UserContext);

  return (
    <div className="flex gap-2">
      <span className="p-2 border-2 border-solid border-emerald-500 rounded text-emerald-500">
        {HELLO_TEXT + context.state}
      </span>
      <img
        src={context.state.user?.avatar}
        alt={context.state.user?.username}
      />
      <Button />
    </div>
  );
};
