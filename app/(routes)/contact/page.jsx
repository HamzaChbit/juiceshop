'use client'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';

const PageContact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const form = useRef();

  const sendEmail = (data) => {
    if (!data.user_email || data.user_email === "") {
      toast.error("Please enter your email address");
      return;
    }
    if (!data.user_name || data.user_name === "") {
      toast.error("Please enter your name");
      return;
    }
    if (!data.message || data.message === "") {
      toast.error("Please enter a message");
      return;
    }

    emailjs.send('service_yoorful', 'template_xoit2ck', data, 'EGW9Iy57TjlDfnomu')
      .then((result) => {
        console.log(result.text);
        toast.success("Message sent!");
        reset(); // Reset the form after successful submission
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  const onSubmit = (data) => {
    sendEmail(data);
  };

  return (
    <div className='md:max-w-7xl w-full h-auto mx-10 py-5 md:mx-auto'>
      {/* ... Your other HTML content ... */}

      <div  className='flex flex-col  mt-10  justify-between gap-x-10 md:flex-row h-full ' >
            <div className='flex flex-col gap-y-5   w-[80%]  md:w-[40%]' >
                <h1    className='py-4 text-green text-4xl font-bold'>
Get in Touch</h1>
<p  className='text-xl mb-8  maw-w-[40%] ' >Fill in the form with your questions, comments and concerns, and  we will get right back to you.</p>
<hr   className='text-green'/>

        <h1    className='py-4 text-green text-2xl font-bold' >Other ways to reach us</h1>
        <div className='flex md:flex-row justify-between   flex-col' >
           <div className='flex    flex-col gap-x-10   ' >
                <p className='text-xl  ' >Wholesale enquiries:</p>
                <h1  className=' text-green text-2xl font-bold'>info@mysite.com</h1>
           </div>
           <div  className='flex flex-col gap-x-10' >
           <p   className='text-xl  '>PR, press or partnerships:</p>
                <h1  className=' text-green text-2xl font-bold'>info@mysite.com</h1>

           </div>
        </div>
     <h2  className='text-xl py-5'>
     Address: <br />

500 Terry Francine <br />
San Francisco,<br />

CA 94158

     </h2>



            </div>



      <form ref={form} onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-[80%] md:w-[40%]'>
        <div className='flex flex-col md:flex-row justify-between gap-x-10 py-8'>
          <div className='flex flex-col w-full'>
            <label className='py-3 text-green text-2xl font-medium'>First Name</label>
            <input
              type="text"
              {...register("user_name", { required: true })}
              className='border-b-2 mt-1 w-full px-3 py-5 bg-hero focus:border-b-green text-xl shadow-sm placeholder-slate-400 focus:outline-none border-green focus:border-b-2'
            />
          </div>
          <div className='flex flex-col w-full'>
            <label className='py-3 text-green text-2xl font-medium'>Last Name</label>
            <input
              type="text"
              {...register("user_last_name", { required: true })}
              className='border-b-2 border-green mt-1 w-full px-3 py-5 bg-hero focus:border-b-green text-xl shadow-sm placeholder-slate-400 focus:outline-none focus:border-b-2'
            />
          </div>
        </div>
        <label className='py-4 text-green text-2xl font-medium'>Email*</label>
        <input
          type="email"
          {...register("user_email", { required: true })}
          className='border-b-2 border-green mt-1 w-full px-3 py-5 bg-hero focus:border-b-green shadow-sm placeholder-slate-400 focus:outline-none text-xl focus:border-b-2'
        />
        <label className='py-8 text-green text-2xl font-medium'>Message</label>
        <textarea
          {...register("message", { required: true })}
          className='border-b-2 border-green mt-1 w-full px-3 py-1 bg-hero focus:border-b-green text-xl shadow-sm focus:outline-none focus:border-b-2 '
        />
        <div className='flex justify-end'>
          <input
            type="submit"
            value="submit"
            className='mt-10 py-5 px-4 text-green bg-slate-300 w-full md:w-[200px] rounded-2xl border-2 border-green hover:bg-white hover:duration-500 cursor-pointer'
          />
        </div>
      </form>
    </div>
    </div>
  );
};

export default PageContact;
