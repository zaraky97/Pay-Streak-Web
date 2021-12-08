import React from "react";
import { useLocation } from "react-router";

interface Props {}

export const Home: React.FC<Props> = () => {
  const { state } = useLocation();
  console.log(state);
  return (
    <>
      <h2>Welcome to the homepage {state}!</h2>
      <p>You can do this, I believe in you.</p>
    </>
  );
};
