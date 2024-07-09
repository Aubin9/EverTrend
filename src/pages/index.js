import React from "react";
import CustomButton from "../components/CustomButton";
import Landing from "../assets/landing.png";

const Home = () => {
  const handleButtonClick = () => {
    alert("Shop Now");
  };
  return (
    <section>
      <article id="product">
        <div className="Welcome">
          <span className="subtitle">EXPLORE OUR</span>
          <h1 className="title">diverse collection</h1>
          <CustomButton
            onClick={handleButtonClick}
            variant="primary"
            text={"Shop Now"}
          />
        </div>
        <div className="welcome-image">
          <img src={Landing} alt="landing" width={900} height={600}></img>
        </div>
      </article>
    </section>
  );
};

export default Home;
