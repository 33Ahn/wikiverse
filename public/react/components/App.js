import React, { useState, useEffect } from "react";
import { PagesList } from "./PagesList";
import { SinglePage } from "./SinglePage";
import { Form } from "./Form";

// import and prepend the api url to any fetch calls
import apiURL from "../api";

export const App = () => {
  const [pages, setPages] = useState([]);
  const [singlePage, setSinglePage] = useState({}); // set the article data on a new piece of state
  const [isAddingArticle, setIsAddingArticle] = useState(true);

  useEffect(() => {
    fetchPages();
  }, []);

  async function fetchPages() {
    try {
      const response = await fetch(`${apiURL}/wiki/`);
      const pagesData = await response.json();
      setPages(pagesData);
    } catch (err) {
      console.log("Oh no an error! ", err);
    }
  }

  // To make a fetch request to the /wiki/:slug endpoint for the specific article
  async function fetchArticleData(slug) {
    try {
      const response = await fetch(`${apiURL}/wiki/${slug}`); // dynamic ${slug}
      const articleData = await response.json();
      console.log(articleData);
      setSinglePage(articleData);
    } catch (err) {
      console.log("An error has occurred!", err);
    }
  }

  // The data sent should look something like this:
  const articleData = {
    title: "",
    content: "",
    name: "",
    email: "",
    tags: "",
  };

  // To send data in a fetch that is not get, but a post request
  async function fetchPostData() {
    try {
      const response = await fetch(`${apiURL}/wiki/${slug}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
          articleData // our data to Create here
        ),
      });
      const data = await response.json();
    } catch (err) {
      console.log("An error has occurred!", err);
    }
  }

  const handleSubmit = (e) => {
    // disable default behavior (default: send it to the server and reload the page)
    e.preventDefault();

    // add article
    setIsAddingArticle({ title, content, name, email, tags });

    // clear out the form for next time
    setIsAddingArticle(true);
  };

  return (
    <>
      <main>
        {Object.keys(singlePage).length === 0 ? (
          <div>
            <h1>WikiVerse</h1>
            <h2>An interesting 📚</h2>
            <PagesList pages={pages} handleClick={fetchArticleData} />
          </div>
        ) : (
          <SinglePage singlePage={singlePage} />
        )}

        <button
          onClick={() => {
            isAddingArticle ? <Form isAddingArticle={isAddingArticle} /> : "";
          }}
        >
          Create a Page
        </button>
      </main>
      <footer>&copy;Wikiverse 2022.</footer>
    </>
  );
};
