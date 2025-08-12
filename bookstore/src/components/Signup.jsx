/*import React from 'react';
import { Link } from "react-router-dom";
import Login from './Login';
import { useForm } from "react-hook-form";


function Signup() {
  const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
  
  return (
    <div className="flex h-screen items-center justify-center bg-black-400">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
        <div className="flex justify-end">
          <Link to="/" className="btn btn-sm btn-circle btn-ghost">
            ✕
          </Link>
        </div>
        <h3 className="font-bold text-lg text-center">Signup</h3>

       
        <div className="mt-4 space-y-2">
          <span>Name</span>
          <input
            type="text"
            placeholder="Enter your fullname"
            className="w-full px-3 py-2 border rounded-md outline-none"
          />
        </div>

       
        <div className="mt-4 space-y-2">
          <span>Email</span>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-3 py-2 border rounded-md outline-none"
          />
        </div>

        
        <div className="mt-4 space-y-2">
          <span>Password</span>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full px-3 py-2 border rounded-md outline-none"
          />
        </div>

        
        <div className="flex justify-between items-center mt-6">
          <button className="bg-pink-500 text-white rounded-md px-4 py-2 hover:bg-pink-700 duration-200">
            Signup
          </button>
          <p className='text-xl'>
            Have an account?{" "}
            <button className="underline text-blue-500 cursor-pointer"
            onClick={()=>
              document.getElementById("my_modal_3").showModal()
            }
            >
              Login
            </button>
           {""}
          
          </p>
          <Login/>
        </div>
      </div>
    </div>
  );
}

export default Signup;
*/
import React from 'react';
import { Link } from "react-router-dom";
import Login from './Login';
import { useForm } from "react-hook-form";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Signup form data:", data);
    // You can close modal, show toast, or redirect here
  };

  return (
    <div className="flex h-screen items-center justify-center bg-black-400">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
        <div className="flex justify-end">
          <Link to="/" className="btn btn-sm btn-circle btn-ghost">
            ✕
          </Link>
        </div>
        <h3 className="font-bold text-lg text-center">Signup</h3>

        {/* Form wrapper added here */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Name */}
          <div className="mt-4 space-y-2">
            <span>Name</span>
            <input
              type="text"
              placeholder="Enter your fullname"
              className="w-full px-3 py-2 border rounded-md outline-none"
              {...register("name", { required: true })}
            />
            {errors.name && <p className="text-red-500 text-sm">Name is required</p>}
          </div>

          {/* Email */}
          <div className="mt-4 space-y-2">
            <span>Email</span>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border rounded-md outline-none"
              {...register("email", { required: true })}
            />
            {errors.email && <p className="text-red-500 text-sm">Email is required</p>}
          </div>

          {/* Password */}
          <div className="mt-4 space-y-2">
            <span>Password</span>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 border rounded-md outline-none"
              {...register("password", { required: true })}
            />
            {errors.password && <p className="text-red-500 text-sm">Password is required</p>}
          </div>

          {/* Buttons */}
          <div className="flex justify-between items-center mt-6">
            <button
              type="submit"
              className="bg-pink-500 text-white rounded-md px-4 py-2 hover:bg-pink-700 duration-200"
            >
              Signup
            </button>

            <p className='text-md ml-1.5'>
              Have an account?{" "}
              <button
                type="button"
                className="underline text-blue-500 cursor-pointer"
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              >
                Login
              </button>
              {""}
            </p>
          </div>
        </form>
        <Login />
      </div>
    </div>
  );
}

export default Signup;
