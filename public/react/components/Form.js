import React from "react";

export const Form = ({ isAddingArticle }) => {
  return (
    <>
      <h1>WikiVerse</h1>
      <h3>Add a Page</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={isAddingArticle}
          onChange={(e) => setIsAddingArticle(e.target.value)}
          placeholder="Title"
        ></input>
        <input
          type="text"
          value={isAddingArticle}
          onChange={(e) => setIsAddingArticle(e.target.value)}
          placeholder="Article Content"
        ></input>
        <input
          type="text"
          value={isAddingArticle}
          onChange={(e) => setIsAddingArticle(e.target.value)}
          placeholder="Author Name"
        ></input>
        <input
          type="email"
          value={isAddingArticle}
          onChange={(e) => setIsAddingArticle(e.target.value)}
          placeholder="Author Email"
        ></input>
        <input
          type="text"
          value={isAddingArticle}
          onChange={(e) => setIsAddingArticle(e.target.value)}
          placeholder="Tags"
        ></input>

        <button type="submit">Create pages</button>
      </form>
    </>
  );
};
