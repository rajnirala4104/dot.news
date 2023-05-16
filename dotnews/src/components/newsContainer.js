import NewsBox from "./newsBox";
import { useState } from 'react'
import './css/newsContainer.css'

function NewsContainer(props) {

    const [newsState, setNewsState] = useState([])
    const API = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=2139974812e64d308b801a24cb53aa65"
    // const newsDicArr = [];
    fetch(API)
        .then(response => response.json())
        .then(data => {
            data.articles.forEach(newsDic => {
                newsState.push({
                    newsPublishTime: newsDic.publishedAt,
                    newsTitle: newsDic.title,
                    newsDescription: newsDic.description,
                    newsImageUrl: newsDic.urlToImage,
                    newsReadMoreUrl: newsDic.url
                })
                console.log(`-title : ${newsDic.title}\n-description: ${newsDic.description}\n-imageUrl: ${newsDic.urlToImage}\n-Time: ${newsDic.publishedAt}`)
            });
        }, err => console.log(err))
        // console.log(newsState)
        // setNewsState(newsState)
    return (
        <div className="container newsContainer row">
            {newsState.map((news, index) => {
                // console.log(news);
                return (
                    <NewsBox key={index} newsPublishTime={news.newsPublishTime} newsTitle={news.newsTitle} newsDescription={news.newsDescription} newsImageUrl={news.newsImageUrl}/>
                )
            })}
        </div>
    )
}

export default NewsContainer
