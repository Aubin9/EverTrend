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

export const products = [
  {
    id: 1,
    title: "Blender",
    price: 1999,
    imageUrl: img1,
    size: "Standard",
    color: "White",
    description: "A high-speed blender perfect for smoothies and soups.",
  },
  {
    id: 2,
    title: "Computer1",
    price: 24999,
    imageUrl: img2,
    size: "15 inch",
    color: "Black",
    description: "A high-performance computer for all your computing needs.",
  },
  {
    id: 3,
    title: "Computer2",
    price: 14999,
    imageUrl: img3,
    size: "13 inch",
    color: "Silver",
    description: "A compact and powerful computer for everyday tasks.",
  },
  {
    id: 4,
    title: "Desktop1",
    price: 29999,
    imageUrl: img4,
    size: "27 inch",
    color: "Black",
    description:
      "A versatile desktop with a large display for all your work needs.",
  },
  {
    id: 5,
    title: "Dispenser1",
    price: 2999,
    imageUrl: img5,
    size: "Medium",
    color: "White",
    description: "A convenient water dispenser for home and office use.",
  },
  {
    id: 6,
    title: "Dispenser2",
    price: 2999,
    imageUrl: img6,
    size: "Large",
    color: "Silver",
    description:
      "A high-capacity water dispenser with cooling and heating functions.",
  },
  {
    id: 7,
    title: "Headphone1",
    price: 2999,
    imageUrl: img7,
    size: "One Size",
    color: "Black",
    description: "High-fidelity headphones with noise-canceling features.",
  },
  {
    id: 8,
    title: "Iron@4x1",
    price: 2999,
    imageUrl: img8,
    size: "Standard",
    color: "Blue",
    description: "A reliable iron for all types of fabric.",
  },
  {
    id: 9,
    title: "Iron@4x2",
    price: 2999,
    imageUrl: img9,
    size: "Standard",
    color: "Red",
    description: "An efficient iron with advanced steam functions.",
  },
  {
    id: 10,
    title: "Landing",
    price: 2999,
    imageUrl: img10,
    size: "Standard",
    color: "Gray",
    description: "A multi-purpose landing pad for drones and other devices.",
  },
  {
    id: 11,
    title: "Watch1",
    price: 2999,
    imageUrl: img11,
    size: "One Size",
    color: "Black",
    description: "A stylish and functional watch for everyday wear.",
  },
  {
    id: 12,
    title: "Watch2",
    price: 2999,
    imageUrl: img12,
    size: "One Size",
    color: "Gold",
    description: "A luxurious watch with advanced features.",
  },
  {
    id: 13,
    title: "Watch3",
    price: 2999,
    imageUrl: img13,
    size: "One Size",
    color: "Silver",
    description: "A classic watch with a timeless design.",
  },
];

const Home = () => {
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
                  <img src={imageUrl} alt={title} width={10} height={10} />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </article>
      <article id="new-arrivals">
        <h1
          style={{
            width: "100%",
            textAlign: "center",
            fontSize: "3rem",
            color: "var(--color-primary)",
          }}
        >
          New arrivals
        </h1>
        <h2
          style={{
            width: "100%",
            textAlign: "center",
            color: "var(--color-primary)",
          }}
        >
          Currently in store with no shipment fee attached
        </h2>
        <div className="arrival-categories">
          {products.map(({ id, title, price, imageUrl }) => {
            return (
              <div key={id} class="grid">
                <div className="product-image">
                  <img src={imageUrl} alt={title} width={50} height={50} />
                </div>
                <div className="arrival-title">{title}</div>
                <span className="arrival-price">N {price}</span>
                <CustomButton
                  text="Add to cart"
                  onClick={() => {
                    alert("you can add to carts");
                  }}
                  variant="primary"
                  className="cartBtn"
                  icon={true}
                />
              </div>
            );
          })}
        </div>
      </article>
    </section>
  );
};

export default Home;
