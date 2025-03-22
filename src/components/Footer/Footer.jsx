import "./Footer.css";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className="footeradidis mt-5">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-2 col-sm-6 mb-4 footer-sec">
              <h5>PRODUCTS</h5>
              <ul className="list-unstyled">
                <li><a href="#">Shoes</a></li>
                <li><a href="#">Clothing</a></li>
                <li><a href="#">Accessories</a></li>
              </ul>
            </div>
  
            
            <div className="col-md-2 col-sm-6 mb-4">
              <h5>SPORTS</h5>
              <ul className="list-unstyled">
                <li><a href="#">Running</a></li>
                <li><a href="#">Basketball</a></li>
                <li><a href="#">Football</a></li>
                <li><a href="#">Yoga</a></li>
                <li><a href="#">Outdoor</a></li>
                <li><a href="#">Tennis</a></li>
                <li><a href="#">Training</a></li>
              </ul>
            </div>
  
            <div className="col-md-2 col-sm-6 mb-4">
              <h5>CATEGORY</h5>
              <ul className="list-unstyled">
                <li><a href="#">Men</a></li>
                <li><a href="#">Women</a></li>
                <li><a href="#">Kids</a></li>
                <li><a href="#">Sale</a></li>
              </ul>
            </div>
  
            <div className="col-md-2 col-sm-6 mb-4">
              <h5>COMPANY INFO</h5>
              <ul className="list-unstyled">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Carbon Footprint</a></li>
                <li><a href="#">Press</a></li>
                <li><a href="#">adiClub</a></li>
              </ul>
            </div>
  
            <div className="col-md-2 col-sm-6 mb-4">
              <h5>SUPPORT</h5>
              <ul className="list-unstyled">
                <li><a href="#">Help</a></li>
                <li><a href="#">Shipping</a></li>
                <li><a href="#">Returns</a></li>
                <li><a href="#">adiClub & Newsletter</a></li>
                <li><a href="#">Vouchers</a></li>
                <li><a href="#">Size Charts</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Accessibility</a></li>
                <li><a href="#">Storefinder</a></li>
              </ul>
            </div>
  
            <div className="col-md-2 col-sm-6 mb-4">
              <h5>FOLLOW US</h5>
              <div className="social-icons d-flex flex-column">
                <a href="#"><FaFacebook /></a>
                <a href="#"><FaInstagram /></a>
                <a href="#"><FaYoutube /></a>
              </div>
            </div>
          </div>
  
          <div className="footeradidis-bottom mt-4 pt-3 border-top d-flex flex-wrap justify-content-center">
            <a href="#" className="me-3">Data Settings</a>
            <a href="#" className="me-3">Cookie Settings</a>
            <a href="#" className="me-3">Privacy Policy</a>
            <a href="#" className="me-3">Terms And Conditions</a>
            <a href="#">Imprint</a>
          </div>
        </div>
      </footer>
    );
  };
export default Footer