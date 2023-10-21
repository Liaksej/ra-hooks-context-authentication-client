"use client";

import { Main } from "@/components/Main";
import { Header } from "@/components/Header";
import UserContext from "@/context/UserContext";
import { useAuthorizedData } from "@/hooks/useAuthorizedData";

export default function Home() {
  const { state, dispatch } = useAuthorizedData();

  if (!state.isBrowser) {
    return null;
  }

  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <Header />
        <Main />
      </UserContext.Provider>
    </>
  );
}
