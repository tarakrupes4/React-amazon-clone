import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/adlp/builder/BFF-V1-01-Hero-T-59d56e74-90ad-47d3-b893-5d1b6665011b._CB417386572_.jpg"
          alt="homeee"
        />

        <div className="home__row">
          <Product
            title="iphone"
            price={599.99}
            image="https://www.apple.com/v/iphone/home/bc/images/meta/iphone__btp62hy2cbea_og.png"
            rating={5}
          />
          <Product
            title="Alexa"
            price={25.4}
            image="https://ichef.bbci.co.uk/news/976/cpsprodpb/5C18/production/_119167532_amazon1.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            title="Iwatch"
            price={208}
            image="https://fscl01.fonpit.de/userfiles/7682239/image/all-apple-watches.jpg"
            rating={5}
          />
          <Product
            title="Beautiful wall painting"
            price={0.99}
            image="https://www.arttothe5th.com/wp-content/uploads/2021/02/acrylic-painting.jpg"
            rating={4}
          />
          <Product
            title="MacBookPro"
            price="9999.99"
            image="https://www.apple.com/v/macbook-pro-14-and-16/a/images/overview/hero/intro__ewz1ro7xs14y_large.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            title="Samsung Curved Tv"
            price="499.78"
            image="https://images.samsung.com/is/image/samsung/latin-en-uhdtv-nu8500-un65nu8500pxpa-rperspectiveblack-121406984?$720_576_PNG$"
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
