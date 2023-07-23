import "./css/newsbax.css";

function NewsBox(props) {
   return (
      <div className="card h-100 shadow">
         <img
            src={props.urlToImage}
            className="card-img-top"
            alt="image not loaded"
         />
         <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
            <a
               href={props.url}
               target="_blank"
               className="btn btn-primary"
               rel="noreferrer"
            >
               Read More...
            </a>
         </div>
      </div>
   );
}

export default NewsBox;
