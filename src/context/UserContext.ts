import { createContext, Dispatch } from "react";

interface State {
  authorized: boolean;
}

interface Action {
  type: "authorized" | "unauthorized";
}

interface UserContextType {
  state: State;
  dispatch: Dispatch<Action>;
}

const UserContext = createContext<UserContextType>({
  state: { authorized: false },
  dispatch: () => {},
});

export default UserContext;
