import { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { useDispatch, useSelector } from "react-redux";
// import { toggleUserAuth } from "../../store/Slice/authSlice";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaArrowRight } from "react-icons/fa";
import './login.css'
const Login = () => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const userAuth = useSelector((state) => state.auth?.userAuth);
  // const dispatch = useDispatch();

  // const handelSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch(toggleUserAuth());
  //   console.log(userAuth);
  // };
  // const handleSignUp = (e) => {
  //   e.preventDefault();
  //   console.log('Email:', email, 'Password:', password);
  // };
  const handleGoogleLogin = () => {
    window.location.href = "https://accounts.google.com/signin";
  };
  
  const handleFacebookLogin = () => {
    window.location.href = "https://www.facebook.com/login";
  };
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
}
  return (
    <div className="container">
    <div className="row gap-3 justify-content-center p-5 flex-column flex-lg-row">
      <div className="col-lg-5 col-12 d-flex flex-column gap-4 align-items-start">
        <h2 className="text-uppercase">Login</h2>
        <form
          className="col-12 d-flex flex-column gap-4 align-items-start"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="d-flex flex-column gap-4 col-11">
            <div className="d-flex flex-column gap-2">
            <label htmlFor="email">Email <span className="text-danger">*</span></label>              
            <div>
                <input
                  type="email"
                  {...register("email",
                       { required: "This valid Requird",
                           pattern: { value:  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 
                              message: "Please enter a valid e-mail address" } })}
                               className="col-12 py-3"/></div>
              {errors.email &&touchedFields.email && <span className="text-danger">{errors.email.message}</span>}
            </div>
            <div className="d-flex flex-column gap-2">
              <div className="d-flex justify-content-between align-items-center">
              <label htmlFor="password">Password <span className="text-danger">*</span></label>              
              <div onClick={() => setShowPassword(!showPassword)} style={{ cursor: "pointer" }}>
                {showPassword ?   <FaEye /> :<FaEyeSlash /> } {showPassword ? "Show" : "Hide"} </div>
              </div>
              <div>
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password", { required: "Please enter your password" })}
                  className="col-12  py-3"
                />
              </div>
              {errors.password &&touchedFields.email && <span className="text-danger">{errors.password.message}</span>}
            </div>
            <div className="d-flex gap-2">
              <input type="checkbox" id="agree" />
              <label htmlFor="agree"> Keep me logged in. <a href="#" className="text-dark">More info</a></label>
            </div>
          </div>
          <button className="d-flex gap-4 align-items-center text-uppercase ptpn" type="submit">
            Login <FaArrowRight />
          </button>
        </form>
        <div className="col-11 d-flex align-items-center justify-content-between">
          <button className="bg-white btn-outlite-black col-6 m-1 d-flex justify-content-between align-items-center text-uppercase py-2" onClick={handleFacebookLogin}>
            Facebook <img src="https://img.icons8.com/?size=35&id=118497&format=png&color=000000" alt="Facebook" />
          </button>
          <button className="bg-white btn-outlite-black col-6 m-1 d-flex justify-content-between align-items-center text-uppercase py-2" onClick={handleGoogleLogin}>
            Google <img src="https://img.icons8.com/?size=35&id=17949&format=png&color=000000" alt="Google" />
          </button>
        </div>
        <p>
          I have read and accepted <a href="" className="text-dark">adiClub Terms & Conditions</a> and the <a href="#" className="text-dark">adidas Privacy Notice</a>
        </p>
      </div>
      <div className="col-lg-5 col-12 d-flex flex-column gap-3 align-items-start">
        <h2>JOIN ADICLUB. GET REWARDED TODAY.</h2>
        <p>
          As an adiClub member you get rewarded with what you love for doing what you love. Sign up today and receive immediate access to these Level 1 benefits:
        </p>
        <div className="p-2 ps-4 d-flex flex-column gap-2">
          {["A 10% off voucher for your next purchase", "Access to Members Only products and sales", "Access to adidas Running and Training apps", "Special offers and promotions"].map((benefit, index) => (
            <div key={index} className="d-flex align-items-center gap-2">
              <img src="https://img.icons8.com/?size=20&id=fVnC5GYxLG15&format=png&color=000000" alt="icons8" />
              <p className="p-0 m-0">{benefit}</p>
            </div>
          ))}
        </div>
        <p>
          Join now to start earning points, reach new levels and unlock more rewards and benefits from adiClub.
        </p>
        <button className="ptpn d-flex gap-4 align-items-center text-uppercase " onClick={() => navigate("/register")}>
          Register now <FaArrowRight />
        </button>
        <img src="https://eu.idp.adidas.com/assets/images/adidas/universal-login/adiclub.jpg" className="img-fluid" alt="Adiclub" />
      </div>
    </div>
  </div>
);
};

export default Login;
