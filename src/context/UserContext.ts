import { createContext, Dispatch } from "react";
import { Action, State } from "@/app/page";

interface UserContextType {
  state: State;
  dispatch: Dispatch<Action>;
}

const UserContext = createContext<UserContextType>({
  state: { authorized: false, heading: "", cards: [], user: null },
  dispatch: () => {},
});

export default UserContext;
