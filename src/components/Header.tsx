import { useContext } from "react";
import UserContext from "@/context/UserContext";
import { Authorized } from "@/components/Authorized";
import { AuthorizationForm } from "@/components/AuthorizationForm";

export const Header = () => {
  const context = useContext(UserContext);
  return (
    <header className="flex items-center justify-between p-4 bg-gray-100">
      <h1 className="text-2xl">{context.state.heading}</h1>
      {context.state.authorized ? <Authorized /> : <AuthorizationForm />}
    </header>
  );
};
