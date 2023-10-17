"use client";

import { Main } from "@/components/Main";
import { Header } from "@/components/Header";
import UserContext from "@/context/UserContext";
import {
  createContext,
  Dispatch,
  useContext,
  useLayoutEffect,
  useReducer,
} from "react";

interface State {
  authorized: boolean;
}

interface Action {
  type: "authorized" | "unauthorized";
}

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "authorized":
      return { ...state, authorized: true };
    case "unauthorized":
      return { ...state, authorized: false };
    default:
      return state;
  }
}
export default function Home() {
  const [state, dispatch] = useReducer(reducer, { authorized: false });

  useLayoutEffect(() => {
    const authorized = localStorage.getItem("authorized");
    if (authorized) {
      dispatch({ type: "authorized" });
    }
  }, []);

  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <Header />
        <Main />
      </UserContext.Provider>
    </>
  );
}
