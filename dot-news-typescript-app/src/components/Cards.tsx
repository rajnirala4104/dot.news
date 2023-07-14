import React from "react";

export const Cards = () => {
  return (
    <div className="card border-2 border-red-500 m-3">
      <div className="litInfo bg-gray-200 flex justify-between px-2">
        <div className="publishTime">12:00, 15th july</div>
        <div className="publisherName">BBC news</div>
      </div>
      <img
        src="https://media.istockphoto.com/id/1182477852/photo/breaking-news-world-news-with-map-backgorund.jpg?b=1&s=170667a&w=0&k=20&c=sY8G6CS65VlmrW1FKwOgOSMpc8AjxCIPVkiIX62Fq8c="
        alt=""
        className=""
      />
      <div className="cardContent px-2 py-3 flex flex-col">
        <h2 className="text-2xl">NewsTitle</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed ad
          molestias fugiat aliquid, qui accusantium!
        </p>
        <div className="btns py-2">
          <button className="bg-gray-400 py-1 px-2 rounded">Read More</button>
        </div>
      </div>
    </div>
  );
};
