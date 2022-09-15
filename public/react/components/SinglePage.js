import { format } from "morgan";
import React from "react";

export const SinglePage = ({ singlePage, setSinglePage }) => {
  return (
    <>
      <h1>{singlePage.title}</h1>
      <p>
        <strong>Author: </strong>
        {singlePage.author.name}
      </p>
      <p>
        <strong>Published: </strong>
        {singlePage.createdAt}

        {/* .format(new Date(), "dd/mm/yyyy") */}
      </p>
      <p>{singlePage.content}</p>
      <div>
        <strong>Tags: </strong>
        {singlePage.tags.map((tag, idx) => (
          <p key={idx}>{tag.name}</p>
        ))}
      </div>

      <button onClick={() => setSinglePage(false)}>Back to Wiki List</button>
    </>
  );
};
