import AddHotel from "./components/AddHotel";
import HotelByName from "./components/HotelByName";
import Hotels from "./components/Hotels";

function App() {
  return (
    <div>
      <AddHotel />
      <Hotels />
      <HotelByName hotelName="Lake View" />
    </div>
  );
}

export default App;
