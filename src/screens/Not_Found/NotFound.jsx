
import { useRouteError } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
  const error = useRouteError();
  return (

   <>
       <div className="container-cont">
      <h1 className="first-four">4</h1>

      <div className="cog-wheel1">
        <div className="cog1">
          <div className="top"></div>
          <div className="down"></div>
          <div className="left-top"></div>
          <div className="left-down"></div>
          <div className="right-top"></div>
          <div className="right-down"></div>
          <div className="left"></div>
          <div className="right"></div>
        </div>
      </div>

      <div className="cog-wheel2">
        <div className="cog2">
          <div className="top"></div>
          <div className="down"></div>
          <div className="left-top"></div>
          <div className="left-down"></div>
          <div className="right-top"></div>
          <div className="right-down"></div>
          <div className="left"></div>
          <div className="right"></div>
        </div>
      </div>

     {/* {
      error?<h2 className='text-danger'>{error?.message}</h2>:
      {
        <h1 className="second-four">4</h1>
      <p className="wrong-para">Uh Oh! Page not found!</p>
      }
     } */}

      <h1 className="second-four">4</h1>
      <p className="wrong-para">Uh Oh! Page not found!</p>
      <h2 className='text-danger'>{error?.message}</h2>

    </div>
   </>
  );

};

export default NotFound;
