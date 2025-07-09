import React, { useState } from "react";

const AddHotel = () => {
  const [amenitiesInput, setAmenitiesInput] = useState("");
  const [photosInput, setPhotosInput] = useState("");
  const [hotelData, setHotelData] = useState({
    name: "",
    category: "",
    location: "",
    rating: 0,
    website: "",
    amenities: [],
    phoneNumber: "",
    checkInTime: "",
    checkOutTime: "",
    priceRange: "",
    reservationsNeeded: false,
    isParkingAvailable: false,
    isWifiAvailable: false,
    isPoolAvailable: false,
    isSpaAvailable: false,
    isRestaurantAvailable: false,
    photos: [],
  });

  const changeHandle = (e) => {
    const { value, name, checked, type } = e.target;
    if (type === "checkbox") {
      setHotelData((prev) => ({
        ...prev,
        [name]: checked,
      }));
    } else if (name === "amenities") {
      setAmenitiesInput(value);
    } else if (name === "photos") {
      setPhotosInput(value);
    } else {
      setHotelData((prev) => ({
        ...prev,
        [name]: name === "rating" ? parseInt(value) : value,
      }));
    }
  };
  const submitHandle = async (e) => {
    e.preventDefault();
    const amenitiesArray = amenitiesInput
      .split(",")
      .map((item) => item.trim())
      .filter((item) => item !== "");
    const photosArray = photosInput
      .split(",")
      .map((item) => item.trim())
      .filter((item) => item !== "");
    const finalHotelData = {
      ...hotelData,
      amenities: amenitiesArray,
      photos: photosArray,
    };

    try {
      const response = await fetch("http://localhost:3000/hotels", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(finalHotelData),
      });
      if (!response.ok) {
        console.log("Failed to add a hotel");
      }
      const data = await response.json();
      console.log("Hotel added Successfully", data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h2>Add Hotel Details</h2>
      <form onSubmit={submitHandle}>
        <label htmlFor="name">Name:</label> <br />
        <input
          type="text"
          name="name"
          required
          value={hotelData.name}
          onChange={changeHandle}
        />{" "}
        <br />
        <label htmlFor="category">Category:</label> <br />
        <select
          name="category"
          required
          value={hotelData.category}
          onChange={changeHandle}
        >
          <option value="">Select..</option>
          <option value="Budget">Budget</option>
          <option value="Mid-Range">Mid-Range</option>
          <option value="Luxury">Luxury</option>
          <option value="Boutique">Boutique</option>
          <option value="Resort">Resort</option>
          <option value="Other">Other</option>
        </select>{" "}
        <br />
        <label htmlFor="location">Location:</label> <br />
        <input
          type="text"
          name="location"
          required
          value={hotelData.location}
          onChange={changeHandle}
        />{" "}
        <br />
        <label htmlFor="rating">Rating: </label>
        <input
          type="number"
          name="rating"
          min={0}
          max={5}
          value={hotelData.rating}
          onChange={changeHandle}
        />{" "}
        <br />
        <label htmlFor="website">Website:</label> <br />
        <input
          type="text"
          name="website"
          value={hotelData.website}
          onChange={changeHandle}
        />{" "}
        <br />
        <label htmlFor="phoneNumber">Phone Number:</label> <br />
        <input
          type="text"
          name="phoneNumber"
          required
          value={hotelData.phoneNumber}
          onChange={changeHandle}
        />{" "}
        <br />
        <label htmlFor="checkInTime">Check In Time:</label> <br />
        <input
          type="text"
          name="checkInTime"
          required
          value={hotelData.checkInTime}
          onChange={changeHandle}
        />{" "}
        <br />
        <label htmlFor="checkOutTime">Check Out Time:</label> <br />
        <input
          type="text"
          name="checkOutTime"
          required
          value={hotelData.checkOutTime}
          onChange={changeHandle}
        />{" "}
        <br />
        <label htmlFor="amenities">Amenities:</label> <br />
        <input
          type="text"
          name="amenities"
          value={amenitiesInput}
          onChange={changeHandle}
        />{" "}
        <br />
        <label htmlFor="priceRange">Price Range:</label> <br />
        <select
          name="priceRange"
          value={hotelData.priceRange}
          onChange={changeHandle}
        >
          <option value="">Select</option>
          <option value="$$ (11-30)">$$ (11-30)</option>
          <option value="$$$ (31-60)">$$$ (31-60)</option>
          <option value="$$$$ (61+)">$$$$ (61+)</option>
          <option value="Other">Other</option>
        </select>
        <br />
        <input
          type="checkbox"
          name="reservationsNeeded"
          value={hotelData.reservationsNeeded}
          onChange={changeHandle}
        />{" "}
        <label htmlFor="reservationsNeeded">Reservations needed?</label> <br />
        <input
          type="checkbox"
          name="isParkingAvailable"
          value={hotelData.isParkingAvailable}
          onChange={changeHandle}
        />{" "}
        <label htmlFor="isParkingAvailable">Parking available?</label> <br />
        <input
          type="checkbox"
          name="isWifiAvailable"
          value={hotelData.isWifiAvailable}
          onChange={changeHandle}
        />{" "}
        <label htmlFor="isWifiAvailable">WiFi available?</label> <br />
        <input
          type="checkbox"
          name="isPoolAvailable"
          value={hotelData.isPoolAvailable}
          onChange={changeHandle}
        />{" "}
        <label htmlFor="isPoolAvailable">Pool available?</label> <br />
        <input
          type="checkbox"
          name="isSpaAvailable"
          value={hotelData.isSpaAvailable}
          onChange={changeHandle}
        />{" "}
        <label htmlFor="isSpaAvailable">Spa available?</label> <br />
        <input
          type="checkbox"
          name="isRestaurantAvailable"
          required
          value={hotelData.isRestaurantAvailable}
          onChange={changeHandle}
        />{" "}
        <label htmlFor="isRestaurantAvailable">Restaurant available?</label>{" "}
        <br />
        <label htmlFor="photos">Photos: </label>
        <input
          type="text"
          name="photos"
          value={photosInput}
          onChange={changeHandle}
        />{" "}
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddHotel;
