import React, { useState } from "react";
import apiURL from "../api";

export const Form = ({ isAddingArticle, setIsAddingArticle }) => {
  // We need state for Form data, which should live in the Form Component itself, not in a parent component
  // Form data is handled by the form component's state!
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tags, setTags] = useState("");

  const handleSubmit = async (e) => {
    // disable default behavior (default: send it to the server and reload the page)
    e.preventDefault();

    // we will need to send data in a fetch that is not a get, but a post request, do not need a specific endpoint
    try {
      const response = await fetch(`${apiURL}/wiki/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title, // object--  key:value pair
          content: content,
          name: name,
          email: email,
          tags: tags,
        }),
      });
      const data = await response.json();
    } catch (err) {
      console.log("An error has occurred!", err);
    }
    // // clear out the form for next time
    setTitle("");
    setContent("");
    setName("");
    setEmail("");
    setTags("");
  };

  return (
    <>
      <h1>WikiVerse</h1>
      <h3>Add a Page</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title} // initial state
          onChange={(e) => setTitle(e.target.value)} // controlled component: when a user writes something in the input field, onChange gets fired, take that to setTitle, re-render this component with new title(update the state), then display
          placeholder="Title"
        ></input>
        <input
          type="text"
          value={content} // display the data via the input's "value" prop
          onChange={(e) => setContent(e.target.value)}
          placeholder="Article Content"
        ></input>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Author Name"
        ></input>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Author Email"
        ></input>
        <input
          type="text"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          placeholder="Tags"
        ></input>

        <button type="submit">Create an Article</button>
        <button onClick={() => setIsAddingArticle(false)}>
          Back to Wikilist
        </button>
        <button>DELETE</button>
      </form>
    </>
  );
};
