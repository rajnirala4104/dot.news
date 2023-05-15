import NewsBox from "./newsBox";
import {useState} from 'react'

function NewsContainer(props) {

    const [newsState, setNewsState] = useState([])
    const API = ""

    return (
        <div className="container">
            <NewsBox />
        </div>
    )
}   

export default NewsContainer