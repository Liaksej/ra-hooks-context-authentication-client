"use client";

import { Main } from "@/components/Main";
import { Header } from "@/components/Header";
import UserContext from "@/context/UserContext";
import { useLayoutEffect, useReducer } from "react";
import { fetchFunction } from "@/utils/fetchFunction";

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
    name: string;
    avatar: string;
  } | null;
}

type ActionAuthorization = {
  type: "authorized" | "unauthorized";
};

type ActionGetUser = {
  type: "getUser";
  payload: State["user"];
};

export type Action = ActionAuthorization | ActionGetUser;

const HEADING = "Neto Social";
const URL = "http://localhost:7070/private/me";

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
      const user = localStorage.getItem("user");
      let userData: State["user"] | null | undefined;
      if (user) {
        userData = JSON.parse(user);
        if (userData) {
          dispatch({ type: "getUser", payload: userData });
        }
      } else {
        (async () => {
          try {
            userData = await fetchFunction(URL, "GET", { auth: authorized });
            if (userData) {
              dispatch({ type: "getUser", payload: userData });
              localStorage.setItem("user", JSON.stringify(userData));
            } else {
              throw new Error("Failed to fetch user");
            }
          } catch (error) {
            console.error(error);
            userData = null;
          }
        })();
      }
    }
  }, [dispatch]);

  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <Header />
        <Main />
      </UserContext.Provider>
    </>
  );
}
