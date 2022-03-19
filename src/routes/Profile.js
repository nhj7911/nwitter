import React from "react";
import { auth } from "fbase";

export default () => {
  const onLogOutClick = () => {
    auth.signOut();
  };
  return (
    <>
      <button onClick={onLogOutClick}>Log Out</button>
    </>
  );
};
