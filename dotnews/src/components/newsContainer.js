import { useLayoutEffect, useState } from "react";
import { getNews } from "../api/service/news";
import "./css/newsContainer.css";
import NewsBox from "./newsBox";

function NewsContainer(props) {
   const [newsState, setNewsState] = useState([]);

   useLayoutEffect(() => {
      (async () => {
         const response = await getNews();
         console.log(response.data.articles);
         setNewsState(response.data.articles);
      })();
   }, []);

   return (
      <div className="container newsContainer row">
         {newsState.map((news, index) => {
            console.log(news);
            return <NewsBox key={index} {...news} />;
         })}
      </div>
   );
}

export default NewsContainer;
