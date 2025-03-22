// import React from 'react'

const About = () => {

  return (
    <div className=" py-5 text-center">
    <h1 className="display-4 fw-bold mb-4">About Us</h1>
    {/* <p className="lead text-muted mx-auto mb-4 w-50" >
        Welcome , your go-to destination for the latest fashion trends.
        We bring you high-quality, stylish, and comfortable clothing that suits every occasion.
        Our mission is to make fashion accessible, affordable, and effortless for everyone.
    </p> */}
    <div className="mt-4 h-25">
        <img
            src="https://brand.assets.adidas.com/video/upload/f_auto,q_auto/if_w_gt_768,w_768/global_the_original_originals_ss25_launch_hp_mh_all_franchises_m_8e34b406ae.jpg"
            alt="Fashion Store"
            className="img-fluid shadow w-100 h-25"
        />
    </div>
</div>
  )
};

export default About
