import React from "react";

interface Prop {
  newsTitle: string;
  newsPublicshTime: string;
  newsImageUrl: string;
  newsAuthor: string;
  newsDescription: string;
  newsUrl: string;
}

export const Cards = ({
  newsTitle,
  newsPublicshTime,
  newsAuthor,
  newsImageUrl,
  newsDescription,
  newsUrl,
}: Prop) => {
  return (
    <div className="card border-2 border-red-500 m-3">
      <div className="litInfo bg-gray-200 flex justify-between px-2">
        <div className="publishTime">{newsPublicshTime}</div>
        <div className="publisherName">{newsAuthor}</div>
      </div>
      <img
        src={newsImageUrl ? newsImageUrl : "Oops"}
        alt={newsTitle ? newsTitle : "Oops"}
        className=""
      />
      <div className="cardContent px-2 py-3 flex flex-col">
        <h2 className="text-2xl">{newsTitle}</h2>
        <p>{newsDescription}</p>
        <div className="btns py-2">
          <a
            className="bg-gray-400 py-1 px-2 rounded"
            target="_blank"
            href={newsUrl}
            rel="noreferrer"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};
