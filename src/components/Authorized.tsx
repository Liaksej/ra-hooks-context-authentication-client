import { useContext } from "react";
import UserContext from "@/context/UserContext";
import { Button } from "@/components/Button";

const HELLO_TEXT = "Hello, ";

export const Authorized = () => {
  const context = useContext(UserContext);

  function unauthorizedHandler() {
    context.dispatch({ type: "unauthorized" });
    localStorage.removeItem("authorized");
    localStorage.removeItem("user");
  }

  return (
    <div className="flex gap-2">
      <span className="py-2 text-gray-800">
        {HELLO_TEXT + context.state.user?.name}
      </span>
      <img
        src={context.state.user?.avatar}
        alt={context.state.user?.name}
        className="rounded-full"
      />
      <Button onClick={unauthorizedHandler} />
    </div>
  );
};
