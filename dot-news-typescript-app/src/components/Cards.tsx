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
    <div className="card m-3 max-w-[24rem] shadow-lg rounded-lg bg-white">
      <div className="litInfo bg-gray-800 text-slate-300 flex justify-between px-2 p-3 rounded-t-lg">
        <div className="publishTime">{newsPublicshTime}</div>
        <div className="publisherName">{newsAuthor}</div>
      </div>
      <img
        src={newsImageUrl ? newsImageUrl : "Oops"}
        alt={newsAuthor ? newsAuthor : "Oops"}
        className=""
      />
      <div className="cardContent px-2 py-3 flex flex-col">
        <h2 className="text-2xl">{newsTitle}</h2>
        <p className="py-3">{newsDescription}</p>
        <div className="btns py-2">
          <a
            className="bg-gray-800 text-slate-50 py-2 px-3 rounded"
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
