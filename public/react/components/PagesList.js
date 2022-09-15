import React from "react";
import { Page } from "./Page";

export const PagesList = ({ pages, handleClick }) => {
  // console.log("PagesList "); to see what it is
  return (
    // .map() belongs to JavaScript, so {} is required & needs a key
    <>
      {pages.map((page, idx) => {
        return <Page page={page} key={idx} handleClick={handleClick} />;
      })}
    </>
  );
};
