import React from "react";
import { useState, useEffect } from "react";

function PicturePage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.nasa.gov/planetary/apod?api_key=iVhT3ciJ4Jdvz3DM8lZv2p7SJPvRPnCpAnk0yvQ4`
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
  }, []);

  return (
    <>
      <p className="text-xl font-bold sm:text-3xl mb-2">
        Astronomy Pic of The Day
      </p>
      <div className="flex flex-col justify-center lg:flex-row shadow-xl glass bg-base-100 hover:bg-base-100">
        <figure className="w-auto sm:w-96 container">
          <img src={data.hdurl} alt="POTD" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-sm">Date: {data.date}</h2>
          <h2>Photographer: {data.copyright}</h2>
          <h1 className="font-semibold text-base">{data.title}</h1>
        </div>
      </div>
    </>
  );
}

export default PicturePage;
