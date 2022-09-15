import { format } from "morgan";
import React from "react";
import apiURL from "../api";

export const SinglePage = ({ singlePage, setSinglePage }) => {
  // When the button is clicked, send a DELETE request to DELETE /wiki/:slug.
  const handleDelete = async () => {
    window.location.reload(false); // will automatically refresh
    try {
      const response = await fetch(`${apiURL}/wiki/${singlePage.slug}`, {
        method: "DELETE",
      });
      const data = await response.json();
    } catch (err) {
      console.log("An error has occurred!", err);
    }
  };

  // change the date format
  const day = new Date(singlePage.createdAt).getUTCDate();
  const month = new Date(singlePage.createdAt).getUTCMonth();
  const year = new Date(singlePage.createdAt).getUTCFullYear();

  return (
    <>
      <h1>{singlePage.title}</h1>
      <h3>
        Author: <span>{singlePage.author.name}</span>
      </h3>
      <h3>
        Published: <span>{`${month + 1}/${day}/${year}`}</span>
      </h3>
      <h3>
        <span>{singlePage.content}</span>
      </h3>
      <div>
        <h3>Tags: </h3>
        {singlePage.tags.map((tag, idx) => (
          <h3 key={idx}>
            <span>{tag.name}</span>
          </h3>
        ))}
      </div>

      <button onClick={handleDelete}>DELETE</button>
      <button onClick={() => setSinglePage(false)}>Back to Wiki List</button>
    </>
  );
};
