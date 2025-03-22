import { useForm } from "react-hook-form";
import { useState } from "react";
import { FaEye, FaEyeSlash, FaArrowRight } from "react-icons/fa";
import './sign.css'

const Sign = () => {
  // const [username, setUsername] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [confirmPassword, setConfirmPassword] = useState('');

  // const handleSignUp = (e) => {
  //   e.preventDefault();
  //   if (password !== confirmPassword) {
  //     alert('Passwords do not match!');
  //     return;
  //   }
  // };

  // const navigate = useNavigate();

  const handleGoogleLogin = () => {
    window.location.href = "https://accounts.google.com/signin";
  };
  
  const handleFacebookLogin = () => {
    window.location.href = "https://www.facebook.com/login";
  };

  const { register, handleSubmit, formState: { errors, touchedFields }} = useForm({defaultValues:{phone: "🇪🇬 +20 1013479176"}});
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="container">
    <div className="row gap-3 justify-content-center p-5 flex-column flex-lg-row">
      <div className="col-lg-5 col-12 d-flex flex-column gap-3 align-items-start">
        <h2 className="text-uppercase">Register</h2>
        <p style={{fontSize:17}}>Sign up with</p>

        <div className="col-11 d-flex align-items-center justify-content-between">
          <button className="bg-white btn-outlite-black col-6 m-1 d-flex justify-content-between align-items-center text-uppercase py-2" onClick={handleFacebookLogin}>
            Facebook <img src="https://img.icons8.com/?size=35&id=118497&format=png&color=000000" alt="Facebook" />
          </button>
          <button className="bg-white btn-outlite-black col-6 m-1 d-flex justify-content-between align-items-center text-uppercase py-2" onClick={handleGoogleLogin}>
            Google <img src="https://img.icons8.com/?size=35&id=17949&format=png&color=000000" alt="Google" />
          </button>
        </div>

        <p className="fw-light">Or</p>
        <form className="col-12 d-flex flex-column gap-4 align-items-start" onSubmit={handleSubmit(onSubmit)}>
          <div className="d-flex flex-column gap-4 col-11">
            <div className="d-flex flex-column gap-3">
              <h4 className="text-uppercase fw-bolder">Your Name</h4>

              <div className="d-flex flex-column gap-4 col-12">
              <div className="d-flex flex-column gap-2">
                <label htmlFor="name">First Name <span className="text-danger">*</span></label>    
                <input type="text"  className="col-12 py-3" {...register("firstName", { required: "First name is required", minLength: { value: 5, message: "At least 5 characters" } })} />
                {errors.firstName &&touchedFields.firstName && <span className="text-danger">{errors.firstName.message}</span>}
              </div>

              <div className="d-flex flex-column gap-2">
                <label htmlFor="name">Last Name <span className="text-danger">*</span></label>    

                <input type="text"   className="col-12  py-3" {...register("lastName", { required: "Last name is required", minLength: { value: 5, message: "At least 5 characters" } })} />
                {errors.lastName  &&touchedFields.lastName && <span className="text-danger">{errors.lastName.message}</span>}
              </div>

              <div className="d-flex flex-column gap-2">
                <label htmlFor="name">Gender <span className="text-danger">*</span></label>    
                <div className="d-flex gap-3 align-items-center">
                  <label ><input className="fs-3" type="radio" value="male" {...register("gender", { required: "Gender is required" })} /> Male</label>
                  <label><input type="radio" value="female" {...register("gender", { required: "Gender is required" })} /> Female</label>
                  <label><input type="radio" value="other" {...register("gender", { required: "Gender is required" })} /> Other</label>
                </div>
                {errors.gender && <span className="text-danger">{errors.gender.message}</span>}
              </div>
            </div>
           </div>

            <div className="d-flex flex-column gap-3">
              <h4 className="text-uppercase fw-bolder">Login Details</h4>

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
                <label htmlFor="Phone">Phone <span className="text-danger">*</span></label>              
                <input type="tel" className="col-12  py-3  text-muted" {...register("phone", { required: "Phone number is required", pattern: { value: /^[0-9]{10,}$/, message: "Invalid phone number" } })} />
                {errors.phone &&touchedFields.phone&& <span className="text-danger">{errors.phone.message}</span>}
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
                <input type="checkbox" />
                <label>Yes, I am over 18 years old</label>
              </div>

              <p className="fw-bolder text-uppercase fs-5">Never miss a thing with adidas personalized ads across digital media! Keep your eyes open for latest adidas promotions, products and news</p>

              <div className="d-flex gap-2 align-items-start">
                <input type="checkbox" />
                <label>
                Yes, I want to receive the latest adidas offers and product news through ads shown across digital media based on my interactions with adidas and behavior on platforms like Google and Facebook. I know I can choose to stop sharing my personal data at any time
                  <a href="#" className="text-dark"> Read more</a>
                </label>
              </div>
            </div>
          </div>

          <button className="ptpn d-flex gap-4 align-items-center text-uppercase ptntn" type="submit">
            Register <FaArrowRight/>
          </button>
        </form>

        <p style={{fontSize:17}}>
        By clicking Submit you agree to the <a href="#" className="text-dark">adiClub Terms and Conditions.</a>
        </p>
        <h6>PRIVACY NOTICE</h6>
        <p style={{fontSize:16}}>Your personal data is provided to adidas Sporting Goods Ltd., adidas AG, and adidas Emerging Markets LLC (“adidas”) to create a adiClub membership as described in the adidas <a href=""className="text-dark">Privacy Notice</a>. Your registration cannot be completed without your data. As part of your membership, adidas will send you personalised marketing messages of deals and products based on your adiClub activities and engagements with adidas. You can unsubscribe at any time. By completing your registration, you have read the adidas <a href=""className="text-dark">Privacy Notice</a>, understood your rights and how adidas uses your data.</p>
        <h6>PERSONALISED EMAIL MARKETING MESSAGES</h6>
        <p style={{fontSize:16}}>Personalised Electronic Marketing Messages from adidas Sporting Goods Ltd., adidas AG, runtastic GmbH, and adidas Emerging Markets LLC (“adidas”). I understand as part of adiClub, adidas will use my email address, and other personal data listed in the <a href=""className="text-dark">Privacy Notice</a> to send me information about the adidas brand and its products based on my interests and preferences through in-app notifications and email marketing messages to the email provided to create this account. I know I can exercise my right to object to marketing emails at any time by using the unsubscribe button in all email communications, changing my in-app notification preferences or changing my marketing communications preferences by logging in to my profile, or contacting adidas Customer Service for support.</p>
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
               <p>Want to learn more about adiClub?</p>
               <a style={{ color: "#8a7442",textDecoration:"underline" }}>Read more about the free membership</a>
              <img src="https://eu.idp.adidas.com/assets/images/adidas/universal-login/adiclub.jpg" className="img-fluid" alt="Adiclub" />
            </div>
          </div>
        </div>
);
};

export default Sign;
