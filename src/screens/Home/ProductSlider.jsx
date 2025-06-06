import React, { useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import "./ProductSlider.css";

const ProductSlider = () => {
  const [products, setProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0); // 0 or 1 only

  const getData = async () => {
    try {
      const response = await fetch("http://localhost:3000/Adidis3");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching Adidas data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const visibleProducts =
    currentIndex === 0
      ? products.slice(0, 5) // أول 4.5
      : products.slice(0, 6); // من النص للأخير

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="featured-products-wrapper">
      <h2 className="featured-products-title">WHAT'S HOT</h2>

      <div className="featured-slider-container">
        <div className="featured-slides-wrapper">
          {visibleProducts.map((product, index) => {
            let className = "featured-product-item";

            if (currentIndex === 0 && index === 4) {
              className += " featured-half-item"; // آخر واحد نصه ظاهر
            } else if (currentIndex === 1 && index === 0) {
              className += " featured-half-item"; // أول واحد نصه ظاهر
            }

            return (
              <div key={product.id} className={className}>
                {index === 1 ? (
                  <video
                    className="featured-video"
                    loop
                    autoPlay
                    playsInline
                    muted
                    src="https://brand.assets.adidas.com/video/upload/v1743683161/global_supernova_running_ss25_sustain_catlp_navigation_card_teaser_2_d_dd5c5258d0.mp4"
                  />
                ) : (
                  <img src={product.image} alt={product.name} />
                )}

                <div className="featured-product-details">
                  <h5>{product.name}</h5>
                  <p className="featured-category">{product.description}</p>
                  <div className="showNow">
                    <a href="#">{product.showNow}</a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>


      </div>
      <div className="featured-dots">
        {[0, 1].map((dot) => (
          <button
            key={dot}
            className={`featured-dot ${currentIndex === dot ? "featured-active" : ""}`}
            onClick={() => handleDotClick(dot)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductSlider;
