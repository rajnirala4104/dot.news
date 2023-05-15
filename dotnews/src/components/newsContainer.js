import NewsBox from "./newsBox";
import {useState} from 'react'

function NewsContainer(props) {

    const [newsState, setNewsState] = useState([])
    const API = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=2139974812e64d308b801a24cb53aa65"
    // const newsDicArr = [];
    fetch(API)
    .then(response => response.json())
    .then(data => {
        data.articles.forEach(newsDic => {
            newsState.push({
                newsPublishTime: newsState.publishedAt,
                newsTitle: newsDic.title,
                newsDesctiption : newsDic.desctiption,
                newsImageUrl: newsDic.urlToImage,
                newsReadMoreUrl: newsDic.url
            })
        });
    }, err=>console.log(err))
    console.log(newsState)
    setNewsState(newsState)
    return (
        <div className="container">
            <NewsBox />
        </div>
    )
}   

export default NewsContainer
