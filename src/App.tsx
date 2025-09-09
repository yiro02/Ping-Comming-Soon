import React from 'react';
import { useForm } from 'react-hook-form';
import { FacebookIcon } from './components/icons/facebook-icon';
import { InstagramIcon } from './components/icons/instagram-icon';
import { TwitterIcon } from './components/icons/twitter-icon';
import './index.css';

type FormValues = {
  email: string;
};

function App() {
  const { register, handleSubmit } = useForm<FormValues>();
  const [emailError, setEmailError] = React.useState('');
  const [email, setEmail] = React.useState('');
  const onSubmit = (data: FormValues) => {
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(data.email)) {
      setEmailError('Please provide a valid email address');
      setEmail("example@gmail.com")
      return false;
    } 
    
    alert('Thank you for subscribing!');
    // You can send data to your server here
  };

  return (
    <div className="font-sans">
      {/* Logo */}
      <div className="flex justify-center items-center py-10">
        <img src="/logo.svg" alt="Logo de Ping" className="w-24" />
      </div>

      {/* Main text */}
      <div className="text-center px-4">
        <h2 className="text-gray-400 text-4xl">
          We are launching <strong className="text-black">Soon!</strong>
        </h2>
        <p className="text-black text-lg py-8">
          Subscribe and get notified
        </p>

        {/* Input + Button */}
        <div className="flex justify-center items-center w-screen">
  <form onSubmit={handleSubmit(onSubmit)} className="flex sm:flex-row flex-col items-center gap-2 pt-6">
    
    {/* Contenedor del input y error */}
    <div className="flex flex-col w-full">
      <input
        {...register("email")}
        type="text"
        id="email"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        placeholder="Your email address"
        className={`border-2 w-full h-15 px-5 rounded-full text-gray-600 focus:outline-none  
          ${emailError ? 'border-red-500' : 'border-neutral-200'}`}
      />
      {/* Email error debajo del input */}
    
     {/* Email error */} {emailError && <p className="text-sm italic sm:p-0  p-10 text-red-500">{emailError}</p>}
    </div>
    <button 
      type="submit"
      className="bg-blue-500 m-2 text-white -mt-0 font-bold sm:w-100 w-screen h-16 rounded-full hover:bg-blue-600 transition duration-300 cursor-pointer">
      Notify Me
    </button>
     </form>
        </div>
      </div>
      {/* Dashboard image */}
      <div className="flex justify-center items-center my-12">
        <img src="/illustration-dashboard.png" alt="Ejemplo" className="w-3/4 md:w-1/2" />
      </div>
      {/* Social icons */}
      <div className="flex sm:flex-row flex-col justify-center items-center gap-6 py-6 bg-gray-100">
        <FacebookIcon className="w-15 h-15 p-2 rounded-full cursor-pointer text-blue-500 border-2 border-gray-300 hover:bg-[#1877F2] hover:text-white transition" />
        <TwitterIcon className="w-15 h-15 p-1 rounded-full cursor-pointer text-blue-500 border-2 border-gray-300 hover:bg-[#1877F2] hover:text-white transition"   />
        <InstagramIcon className="w-15 h-15 p-1 rounded-full cursor-pointer text-pink-500 border-2 border-gray-300 hover:bg-[#1877F2] hover:text-white transition" />
        <svg
          viewBox="0 0 24 24"
          className="w-10 h-10 p-2 rounded-full cursor-pointer border-2 border-transparent hover:border-black transition"
        >
          <defs>
            <linearGradient id="x-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#000000" />
              <stop offset="100%" stopColor="#434343" />
            </linearGradient>
          </defs>
          <path
            fill="url(#x-gradient)"
            d="M17.75 3h3.5L14.5 10.52 22.5 21h-7l-4.5-5.78L5.25 21h-3.5l7.5-8.23L1.5 3h7l4 5.18L17.75 3z"
          />
        </svg>
      </div>

      {/* Footer */}
      <p className="text-center text-gray-400 text-base py-4">
        © 2025. All Rights Reserved.
      </p>
    </div>
  );
}

export default App;
