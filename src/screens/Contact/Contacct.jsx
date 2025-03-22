import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { BsXCircleFill } from "react-icons/bs";
import { FaCommentDots, FaEnvelope, FaLock, FaPhone, FaUser } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { MdSubject } from "react-icons/md";
import "./Contact.css";
const Contacct = () => {
    const {register, handleSubmit, formState:{ errors}, watch,reset } = useForm({defaultValues:{FullName:"alyaa"}});
    const [showSuccess, setShowSuccess] = useState(false);
  
    const onSubmit = (data) => {
      console.log(data);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 2000);

      reset();
    }
  
    // useEffect(() => {
    //   if (showSuccess) {
    //     const timer = setTimeout(() => setShowSuccess(false), 2000);
    //     return ()=>clearTimeout (timer);
    //   }
    // }, [showSuccess]);
  
    const fullnameWatch = watch('FullName');
    const passwordWatch = watch('Password');
    const confirmPasswordWatch = watch('Confirm Password');
    const emailWatch = watch('Email');
    const phoneNumberWatch = watch('Phone Number');
    const subjectWatch = watch('subject');
    // const messageWatch = watch('Message...');
    
  return (
    <div className="divLarge">
    {showSuccess && (
      <div className="p-4 mb-4 text-green-700 bg-green-100 rounded-lg panertext">
        <FaCheck className="mx-2"  />
        Form submitted successfully!

        <BsXCircleFill className=" tticon  style={{marginLeft:'90px', fontSize:'18px'}}" />
      </div>
    )}
    <form action="" className="formhook" onSubmit={handleSubmit(onSubmit)}>
    <h2 className="text-2xl font-bold mb-6">Contact Us</h2>

      <div className="input-group">
        <FaUser className="icon" />
        <input type="text" placeholder="Full Name"  {...register('Full Name',
          {
            required:{
            value:true,
            message: "This field is required"
            },
            minLength:{
              value:3,
              message: " must be at least 3 characters"
            },
          },
          {fullnameWatch}
        )}/>
      </div>
      <span className="text-danger d-flex w-100 text-start px-1 eromess">{errors['Full Name']?.message}</span>

      <div className="input-group">
        <FaLock className="icon" />
        <input type="password" placeholder="Password" {...register('Password',
          {
            required:{
            value:true,
            message: "This field is required"
            },
            minLength:{
              value:8,
              message: " must be at least 8 characters"
            },
            pattern:{
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/,
              message: "Password must contain at least 8 characters, including UPPER/lowercase and numbers"
          }
        },
        {passwordWatch}
        )}/>
      </div>
      <span className="text-danger d-flex w-100 text-start px-1 eromess">{errors.Password?.message}</span>

      <div className="input-group">
        <FaLock className="icon" />
        <input type="password" placeholder="Confirm Password" {...register('Confirm Password',
          {
            required:{
            value:true,
            message: "This field is required"
            },
            validate: (value) => value === passwordWatch || "The passwords do not match"
          },
          {confirmPasswordWatch}
        )}/>
      </div>
      <span className="text-danger d-flex w-100 text-start px-1 eromess">{errors['Confirm Password']?.message}</span>

      <div className="input-group">
        <FaEnvelope className="icon" />
        <input type="email" placeholder="Email" {...register('Email',
          {
            required:{
            value:true,
            message: "This field is required"
            },
            pattern:{
              value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "Invalid email address"
          }
        },
        {emailWatch}
        )} />
      </div>
      <span className="text-danger d-flex w-100 text-start px-1 eromess">{errors.Email?.message}</span>

      <div className="input-group">
        <FaPhone className="icon" />
        <input type="number" placeholder="Phone Number" {...register('Phone Number',
          {
            required:{
            value:true,
            message: "This field is required"
            },
            pattern:{
              value: /^[0-9]{10}$/,
              message: "Invalid phone number"
          }
        },
        {phoneNumberWatch}
        )} />
      </div>
      <span className="text-danger d-flex w-100 text-start px-1 eromess">{errors['Phone Number']?.message}</span>

      <div className="input-group">
        <MdSubject className="icon" />
        <select name="subject" id="subject" {...register('subject',
          {
            required:{
            value:true,
            message: "This field is required"
            }
          },
          {subjectWatch}
        )} >
          <option value="select">Select subject</option>
          <option value="math">Css</option>
          <option value="science">Html</option>
          <option value="english">Js</option>
        </select>
      </div>
      <span className="text-danger d-flex w-100 text-start px-1 eromess">{errors.subject?.message}</span>

      <div className="input-group">
  <FaCommentDots className="icontext" />
  <textarea  name="message" id="message" placeholder="Message..." {...register('message', {
      required: {
        value: true,
        message: "This field is required"
      },
      minLength: {
        value: 10,
        message: " must be at least 10 characters"
      }
    })}></textarea>
</div>
      <span className="text-danger d-flex w-100 text-start px-1 eromess">{errors.message?.message}</span>

      <button type="submit">Submit</button>
      <button type="reset">Reset</button>

    </form>
    </div>
  );
}

export default Contacct