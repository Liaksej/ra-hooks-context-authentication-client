import { createContext, Dispatch } from "react";
import { Action, State } from "@/hooks/useAuthorizedData";

interface UserContextType {
  state: State;
  dispatch: Dispatch<Action>;
}

const UserContext = createContext<UserContextType>({
  state: {
    authorized: false,
    heading: "",
    cards: [],
    user: null,
    isBrowser: false,
  },
  dispatch: () => {},
});

export default UserContext;
