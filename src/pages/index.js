import React from "react";
import CustomButton from "../components/CustomButton";
import Landing from "../assets/landing.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import img1 from "../assets/Blender@4x.png";
import img2 from "../assets/computer1.png";
import img3 from "../assets/computer2.png";
import img4 from "../assets/desktop1.png";
import img5 from "../assets/Despenser1.png";
import img6 from "../assets/Despenser2.png";
import img7 from "../assets/headphone1.png";
import img8 from "../assets/Iron@4x1.png";
import img9 from "../assets/Iron@4x2.png";
import img10 from "../assets/landing.png";
import img11 from "../assets/watch1.png";
import img12 from "../assets/watch2.jpg";
import img13 from "../assets/watch3.png";

// import Swiper core and required modules
import { Navigation, Scrollbar, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Home = () => {
  const products = [
    {
      id: 1,
      title: "Blender",
      price: 19.99,
      imageUrl: img1,
    },
    {
      id: 2,
      title: "Computer1",
      price: 24.99,
      imageUrl: img2,
    },
    {
      id: 3,
      title: "Computer2",
      price: 14.99,
      imageUrl: img3,
    },
    {
      id: 4,
      title: "desktop1",
      price: 29.99,
      imageUrl: img4,
    },
    {
      id: 5,
      title: "Despenser1",
      price: 29.99,
      imageUrl: img5,
    },
    {
      id: 6,
      title: "Despenser2",
      price: 29.99,
      imageUrl: img6,
    },
    {
      id: 7,
      title: "headphone1",
      price: 29.99,
      imageUrl: img7,
    },
    {
      id: 8,
      title: "Iron@4x1",
      price: 29.99,
      imageUrl: img8,
    },
    {
      id: 9,
      title: "Iron@4x2",
      price: 29.99,
      imageUrl: img9,
    },
    {
      id: 10,
      title: "landing",
      price: 29.99,
      imageUrl: img10,
    },
    {
      id: 11,
      title: "watch1",
      price: 29.99,
      imageUrl: img11,
    },
    {
      id: 12,
      title: "watch2",
      price: 29.99,
      imageUrl: img12,
    },
    {
      id: 13,
      title: "watch3",
      price: 29.99,
      imageUrl: img13,
    },
  ];
  const handleButtonClick = () => {
    window.scrollTo({
      top: document.getElementById("new-arrivals").offsetTop,
      behavior: "smooth",
    });
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
      <article id="feature-categories">
        <h1 className="title_featured">Featured categories</h1>
        <Swiper
          spaceBetween={40}
          pagination={{
            clickable: true,
          }}
          slidesPerView={1}
          modules={[Pagination, Navigation, Scrollbar, A11y]}
          className="products"
        >
          {products.map(({ id, title, price, imageUrl }) => {
            return (
              <SwiperSlide className="product-card" key={id}>
                <h1 className="product-title">{title}</h1>
                <h2 className="product-price">N {price}</h2>
                <CustomButton
                  text="Buy now"
                  onClick={() => {
                    alert("you can buy this product");
                  }}
                  variant="primary"
                  className="buyBtn"
                />
                <div className="product-image">
                  <img src={imageUrl} alt={title} width={50} height={50} />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </article>
      <article id="new-arrivals">
        <h1>New arrivals</h1>
        <h2>Currently in store with no shipment fee attached</h2>
      </article>
    </section>
  );
};

export default Home;
