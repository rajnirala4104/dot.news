import { useState } from "react";
import "./css/newsContainer.css";
import NewsBox from "./newsBox";

function NewsContainer(props) {
  const [newsState, setNewsState] = useState([]);

  return (
    <div className="container newsContainer row">
      {newsState.map((news, index) => {
        console.log(news);
        return (
          <NewsBox
            key={index}
            newsPublishTime={news.newsPublishTime}
            newsTitle={news.newsTitle}
            newsDescription={news.newsDescription}
            newsImageUrl={news.newsImageUrl}
          />
        );
      })}
    </div>
  );
}

export default NewsContainer;
