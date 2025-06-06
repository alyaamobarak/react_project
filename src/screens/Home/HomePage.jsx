import { useState, useEffect } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import "./Home.css";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const slidesToShow = 4;
  const totalSlides = Math.ceil(products.length / slidesToShow);

  const getData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:3000/Adidis");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching Adidas data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const nextSlide = () => {
    if (currentIndex < totalSlides - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Calculate the visible products for the current slide
  const visibleProducts = products.slice(
    currentIndex * slidesToShow,
    Math.min((currentIndex + 1) * slidesToShow, products.length)
  );

  return (
    <div className="adidas-slider">
      <h2 className="section-title"> SALE</h2>

      <div className="slider">
        {currentIndex > 0 && (
          <button className="arrow left-arrow" onClick={prevSlide}>
            <HiChevronLeft />
          </button>
        )}

        <div className="slides-container">
          {visibleProducts.map((product) => (
            <div key={product.id} className="slide">
              <img className="!important" src={product.image} alt={product.name} />
              <span className="discount-badge">{product.discount}</span>
              <div className="product-info">
                <h3>{product.name}</h3>
                <div className="tpricedl">
                  <p className="price">{product.price}</p>
                  <p className="old-price">{product.oldPrice}</p>
                </div>
                <p className="categorytype">{product.category}</p>
              </div>
            </div>
          ))}
        </div>

        {currentIndex < totalSlides - 1 && (
          <button className="arrow right-arrow" onClick={nextSlide}>
            <HiChevronRight />
          </button>
        )}
      </div>

      <div className="indicators">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage