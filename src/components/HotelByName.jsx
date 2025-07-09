import React from "react";
import useFetch from "../useFetch";

const HotelByName = ({ hotelName }) => {
  const { data, loading, error } = useFetch(
    `https://bi-hotels-delta.vercel.app/hotels/${hotelName}`
  );
  // console.log(data);

  return data ? (
    <div>
      <h2>{data.name}</h2>
      <p>
        <strong>Location: </strong>
        {data.location}
      </p>
      <p>
        <strong>Rating: </strong>
        {data.rating}
      </p>
      <p>
        <strong>Price Range: </strong>
        {data.priceRange}
      </p>
    </div>
  ) : (
    loading && <p>Loading..</p>
  );
};

export default HotelByName;
