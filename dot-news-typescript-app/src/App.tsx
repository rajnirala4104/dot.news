import React, { useEffect, useState } from "react";
import "./App.css";
import { getAllNews } from "./api/services/news";
import { Cards } from "./components/Cards";
import Navbar from "./shared/components/Navbar";

function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await getAllNews();
      setNews(response.data.articles);
    })();
  }, []);

  return (
    <div className="App bg-gray-100">
      <Navbar />
      <div className="container flex-wrap flex flex-col lg:flex-row justify-center items-center mx-auto">
        {news.map((newsDic) => (
          <Cards
            newsAuthor={newsDic.author}
            newsImageUrl={newsDic.urlToImage}
            newsPublicshTime={newsDic.publishedAt}
            newsDescription={newsDic.description}
            newsUrl={newsDic.url}
            newsTitle={newsDic.title}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
