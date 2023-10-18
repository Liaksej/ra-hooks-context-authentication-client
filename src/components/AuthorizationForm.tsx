import { Button } from "@/components/Button";
import { useContext } from "react";
import UserContext from "@/context/UserContext";
import { fetchFunction } from "@/utils/fetchFunction";

const PLACEHOLDER_USERNAME = "Username";
const PLACEHOLDER_PASSWORD = "Password";
const URL_AUTH = "http://localhost:7070/auth";

export const AuthorizationForm = () => {
  const context = useContext(UserContext);

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const usernameInput = form.elements.namedItem(
      PLACEHOLDER_USERNAME,
    ) as HTMLInputElement;
    const passwordInput = form.elements.namedItem(
      PLACEHOLDER_PASSWORD,
    ) as HTMLInputElement;
    const data = await fetchFunction(URL_AUTH, "POST", {
      username: usernameInput.value,
      password: passwordInput.value,
    });
    if (data.token && localStorage) {
      localStorage.setItem("authorized", data.token);
      context.dispatch({ type: "authorized" });
    }
    usernameInput.value = "";
    passwordInput.value = "";
  };

  return (
    <form className="flex gap-2" onSubmit={submitHandler}>
      <input
        name={PLACEHOLDER_USERNAME}
        className="p-2 rounded"
        placeholder={PLACEHOLDER_USERNAME}
      />
      <input
        name={PLACEHOLDER_PASSWORD}
        className="p-2 rounded"
        placeholder={PLACEHOLDER_PASSWORD}
      />
      <Button />
    </form>
  );
};
