import React, { useState, useEffect } from "react";
import { PagesList } from "./PagesList";
import { SinglePage } from "./SinglePage";
import { Form } from "./Form";

// import and prepend the api url to any fetch calls
import apiURL from "../api";

export const App = () => {
  const [pages, setPages] = useState([]);
  const [singlePage, setSinglePage] = useState(null); // set the article data on a new piece of state
  const [isAddingArticle, setIsAddingArticle] = useState(false);

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

  return (
    <>
      <main>
        {singlePage ? (
          <SinglePage singlePage={singlePage} setSinglePage={setSinglePage} />
        ) : isAddingArticle ? (
          <div>
            <Form
              isAddingArticle={isAddingArticle}
              setIsAddingArticle={setIsAddingArticle}
            />
          </div>
        ) : (
          <div>
            <h1>WikiVerse</h1>
            <h2>An interesting 📚</h2>
            <PagesList pages={pages} handleClick={fetchArticleData} />
            <button onClick={() => setIsAddingArticle(true)}>
              Create a Page
            </button>
          </div>
        )}
      </main>
      <footer>&copy;Wikiverse 2022.</footer>
    </>
  );
};
