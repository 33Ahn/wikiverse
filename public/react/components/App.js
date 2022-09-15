import React, { useState, useEffect } from "react";
import { PagesList } from "./PagesList";
import { SinglePage } from "./SinglePage";
import { Form } from "./Form";

// import and prepend the api url to any fetch calls
import apiURL from "../api";

export const App = () => {
  // set a new piece of state
  const [pages, setPages] = useState([]); //
  const [singlePage, setSinglePage] = useState(null); // for the SinglePage Component
  const [isAddingArticle, setIsAddingArticle] = useState(false); // for the Form Component

  // use useEffect to prevent an infinite loop, use a dependency array [] for the second argument
  useEffect(() => {
    fetchPages();
  }, []);

  // fetch GET request
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
    // Conditional rendering, use ternary operator, curly braces {} around it
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
            <h1>Wikiverse</h1>
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
