"use client";

import { Main } from "@/components/Main";
import { Header } from "@/components/Header";
import UserContext from "@/context/UserContext";
import { useLayoutEffect, useReducer } from "react";

export interface State {
  authorized: boolean;
  heading: string;
  cards:
    | {
        id: string;
        title: string;
        img: string;
        content: string;
      }[]
    | null;
  user: {
    id: string;
    login: string;
    username: string;
    avatar: string;
  } | null;
}

export interface Action {
  type: "authorized" | "unauthorized" | "getUser";
  payload?: State["user"];
}

const HEADING = "Neto Social";

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "authorized":
      return { ...state, authorized: true };
    case "unauthorized":
      return { ...state, authorized: false };
    case "getUser":
      return { ...state, user: action.payload };
    default:
      return state;
  }
}
export default function Home() {
  const [state, dispatch] = useReducer(reducer, {
    authorized: false,
    heading: HEADING,
    cards: null,
    user: null,
  });

  useLayoutEffect(() => {
    const authorized = localStorage.getItem("authorized");
    if (authorized) {
      dispatch({ type: "authorized" });
    }

    if (!authorized) {
      dispatch({ type: "unauthorized" });
    }

    const user = localStorage.getItem("user");
    if (user) {
      const userData: State["user"] = JSON.parse(user);
      dispatch({ type: "getUser", payload: userData });
    }
  }, [state.authorized, state.user]);

  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <Header />
        <Main />
      </UserContext.Provider>
    </>
  );
}
