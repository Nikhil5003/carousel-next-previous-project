import "./App.css";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
function App() {
  const [currentIndex, setIndex] = useState(0);
  const images = [
    "https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/632522/pexels-photo-632522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];
  const handleNext = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };
  const handlePrevious = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };
  return (
    <div className="App">
      <div className="carousel-class">
        <img
          key={currentIndex}
          src={images[currentIndex]}
          loading="lazy"
          alt=""
        />
        <div className="icon previousIcon" onClick={handlePrevious}>
          <FaArrowLeft
            style={{
              height: "50px",
              width: "40px",
              color: "whiteSmoke",
            }}
          />
        </div>
        <div className=" icon nextIcon" onClick={handleNext}>
          <FaArrowRight
            style={{
              height: "50px",
              width: "40px",
              color: "whiteSmoke",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
