import { getAuth, signOut } from "@firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Home } from "./home";
import { Login } from "./login";

interface Props {}

export const Top: React.FC<Props> = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const handleLogout = async () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setName("");
        navigate(".");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <>
      {name === "" ? (
        <Login onChange={(name) => setName(name)} />
      ) : (
        <>
          <button onClick={handleLogout}>ログアウト</button>
          <Home />
        </>
      )}
    </>
  );
};
