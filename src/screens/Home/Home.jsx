import "./Home.css"
import HomePage from './HomePage';
import HomePage2 from './HomePage2'
import Panner from './Panner'
import Footer from './../../components/Footer/Footer'
import "bootstrap/dist/css/bootstrap.min.css";
import ProductSlider from "./ProductSlider";

const Home = () => {
  return (
    <>
      <div className="promo-section">
        <div className="promo-text">
          {/* <h1 className="Ramadan"><strong>RAMADAN KAREEM</strong></h1> */}
          <h1 className="Ramadan"><strong>LIGHTBLAZE</strong></h1>
          {/* <p>Train Strong this Ramadan with the Perfect Fits for Your Fitness Journey!</p> */}
          <p>Move like light.!</p>
          <div className="buttons">
            <a href="#" className="btn btn-light">SHOP WOMEN →</a>
          </div>
          <div className="buttons">
            <a href="#" className="btn btn-light">SHOP MEN →</a>
          </div>
        </div>
        <div className="promo-image"></div>
      </div>

      <div className="prom-section">
        <div className="prom-text">
          {/* <h1 className="Ramadan"><strong>RAMADAN KAREEM</strong></h1> */}
          <h1 className="Ramadan"><strong>ADICOLOR</strong></h1>
          {/* <p>Train Strong this Ramadan with the Perfect Fits for Your Fitness Journey!</p> */}
          <p>Expression that's undeniable.</p>
          <div className="buttons">
            <a href="#" className="btn btn-light">SHOP NOW →</a>
          </div>
        </div>
        <div className="promo-image"></div>
      </div>

      <div className="textBot container py-5">
        <h2 className="pop-title ">Popular Right Now</h2>
        <div className="row roeAll">
          <div className="col-md-4  divInside">
            <a href="#" className="likwdith d-block text-decoration-none text-dark fw-bold">handball special yellow</a>
          </div>
          <div className="col-md-4  divInside">
            <a href="#" className="likwdith d-block text-decoration-none text-dark fw-bold">forum</a>
          </div>
          <div className="col-md-4 divInside">
            <a href="#" className="likwdith d-block text-decoration-none text-dark fw-bold">shoes</a>
          </div>
          <div className="col-md-4  divInside">
            <a href="#" className="likwdith d-block text-decoration-none text-dark fw-bold">campus</a>
          </div>
          <div className="col-md-4 divInside">
            <a href="#" className="likwdith d-block text-decoration-none text-dark fw-bold">gazelle</a>
          </div>

        </div>
      </div>
      <div className="container-fluid px-4">
        <div className="row my-5 gx-4">
          <div className="col-md-4 position-relative">
            <img src="../../../public/em-za-categorytiles-hp-men-promoblock.jpg" alt="Men" className="img-fluid w-100" />
            <a href="#" className="btn btn-light promo-btn position-absolute ">MEN   →</a>
          </div>

          <div className="col-md-4 position-relative">
            <img src="../../../public/em-za-categorytiles-hp-women-promoblock.jpg" alt="Women" className="img-fluid w-100" />
            <a href="#" className="btn btn-light promo-btn position-absolute ">WOMEN   →</a>
          </div>

          <div className="col-md-4 position-relative">
            <img src="../../../public/em-za-categorytiles-hp-kids-promoblock.jpg" alt="Kids" className="img-fluid w-100" />
            <a href="#" className="btn btn-light promo-btn position-absolute ">KIDS   →</a>
          </div>
        </div>
      </div>

      <HomePage />
      <HomePage2 />
      <ProductSlider />


      <Panner />
      <Footer />
    </>

  )
}

export default Home
