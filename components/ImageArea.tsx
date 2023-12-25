import React from "react";
import { trending_data } from "../data/trendingData";

const ImageArea = () => {
  return (
    <section className="mt-10 p-6 bg-white rounded-t-lg">
      <div className="pt-5">
        <h1 className="text-xl font-bold text-blue-500">
          Trending Destination
        </h1>
        <p className="font-light">
          Most popular place for travelers all around the world
        </p>
      </div>

      <div className="flex overflow-x-scroll space-x-4 py-6">
        {trending_data.map((item) => (
          <div key={item.id} className="space-y-1 shrink-0 cursor-pointer">
            <img
              key={item.id}
              className="w-80 h-72 object-cover rounded-lg pb-2"
              src={item.src}
              alt=""
            />

            <p className="font-bold">{item.title}</p>
            <p className="">{item.location}</p>
            <p className="font-light text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageArea;
