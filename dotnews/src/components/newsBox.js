import "./css/newsbax.css"

function NewsBox(props) {
    return (
        <div className="card h-100 shadow">
            <img src={props.newsImageUrl} className="card-img-top" alt="image not loaded" />
            <div className="card-body">
                <h5 className="card-title">{props.newsTitle}</h5>
                <p className="card-text">{props.newsDescription}</p>
                <a href="/" className="btn btn-primary">Read More...</a>
            </div>
        </div>
    )
}


export default NewsBox