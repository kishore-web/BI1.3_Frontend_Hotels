import React, { useState } from "react";
import useFetch from "../useFetch";

const Hotels = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const { data, loading, error } = useFetch(
    "https://bi-hotels-delta.vercel.app/hotels"
  );
  console.log(data);
  const deleteHandle = async (hotelId) => {
    try {
      let response = await fetch(
        `https://bi-hotels-delta.vercel.app/hotels/${hotelId}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw error;
      }
      let data = await response.json();
      if (data) {
        console.log("hotel deleted successfully", data);
        setSuccessMessage("Movie deleted successfully");
        setTimeout(() => {
          window.location.reload();
        }, 500);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>All Hotels</h1>
      <ul>
        {data?.map((hotel) => (
          <li key={hotel._id}>
            {hotel.name}
            <button onClick={() => deleteHandle(hotel._id)}>Delete</button>
          </li>
        ))}
      </ul>
      <p>{successMessage}</p>
    </div>
  );
};

export default Hotels;
