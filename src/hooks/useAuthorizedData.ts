import { useEffect, useReducer, useCallback } from "react";
import { fetchFunction } from "@/utils/fetchFunction";

const HEADING = "Neto Social";
const URL_USER_DATA = "http://localhost:7070/private/me";
const URL_CARDS_DATA = "http://localhost:7070/private/news";

export interface State {
  authorized: boolean;
  heading: string;
  cards:
    | {
        id: string;
        title: string;
        image: string;
        content: string;
      }[]
    | null;
  user: {
    id: string;
    login: string;
    name: string;
    avatar: string;
  } | null;
  isBrowser: boolean;
}

type ActionAuthorization = {
  type: "authorized" | "unauthorized";
};

type ActionGetUser = {
  type: "getUser";
  payload: State["user"];
};

type ActionGetCards = {
  type: "getCards";
  payload: State["cards"];
};

type ActionBrowser = {
  type: "browser";
  payload: boolean;
};

export type Action =
  | ActionAuthorization
  | ActionGetUser
  | ActionGetCards
  | ActionBrowser;

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "authorized":
      return { ...state, authorized: true };
    case "unauthorized":
      return { ...state, authorized: false };
    case "getUser":
      return { ...state, user: action.payload };
    case "getCards":
      return { ...state, cards: action.payload };
    case "browser":
      return { ...state, isBrowser: action.payload };
    default:
      return state;
  }
}

async function getCards(token: string) {
  const cards = await fetchFunction(URL_CARDS_DATA, "GET", {
    auth: token,
  });
  if (cards) {
    return cards;
  } else {
    throw new Error("Failed to fetch cards");
  }
}

export const useAuthorizedData = () => {
  const [state, dispatch] = useReducer(reducer, {
    authorized: false,
    heading: HEADING,
    cards: null,
    user: null,
    isBrowser: false,
  });

  const fetchUserData = useCallback(async (auth: string) => {
    let userData: State["user"] | null | undefined;
    userData = await fetchFunction(URL_USER_DATA, "GET", { auth: auth });

    if (!userData) {
      throw new Error("Failed to fetch user");
    }

    localStorage.setItem("user", JSON.stringify(userData));
    dispatch({ type: "getUser", payload: userData });

    return userData;
  }, []);

  const fetchCards = useCallback(async (auth: string) => {
    const cards: State["cards"] | null | undefined = await getCards(auth);
    if (!cards) {
      throw new Error("Failed to fetch cards");
    }
    dispatch({ type: "getCards", payload: cards });

    return cards;
  }, []);

  useEffect(() => {
    const init = async () => {
      try {
        dispatch({ type: "browser", payload: typeof window !== "undefined" });
        const authorized = localStorage.getItem("authorized");
        if (authorized) {
          const userData = await fetchUserData(authorized);
          await fetchCards(authorized);

          if (userData) {
            dispatch({ type: "getUser", payload: userData });
            dispatch({ type: "authorized" });
          }
        }
      } catch (error) {
        console.error("Error initializing data:", error);
        dispatch({ type: "unauthorized" });
      }
    };

    init();
  }, [fetchCards, fetchUserData, state.authorized]);

  return { state, dispatch };
};
