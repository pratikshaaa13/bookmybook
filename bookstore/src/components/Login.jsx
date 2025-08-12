/*import React from "react";
import { Link } from "react-router-dom";
import { useForm} from "react-hook-form"


function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
    <div>
      <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={()=>
              document.getElementById("my_modal_3").close()
            }>
            ✕
          </button>
          </form>
          <h3 className="font-bold text-lg">Login</h3>
          
          <div className="mt-4 space-y-2 py-1 ">
            <span>Email</span>
            <br />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-80 px-3 border rounded-md outline-none"
              {...register("email", { required: true })}
            />
          </div>
          
          <div className="mt-4 space-y-2 py-1 ">
            <span>Password</span>
            <br />
            <input
              type="text"
              placeholder="Enter your password"
              className="w-80 px-3 border rounded-md outline-none"
              {...register("password", { required: true })}
            />
          </div>
          <div className="flex justify-around mt-4 ">
            <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200 ">
              Login
            </button>
            <p>
              Not registered?
              <Link to="/Signup" className="underline text-blue-500 cursor-pointer">
              Signup
              </Link>
              {""}
            </p>
          </div>
        </div>
      </dialog>
      </div>
    </div>
  );
}

export default Login;*/
import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    // Close the modal after submission (optional)
    document.getElementById("my_modal_3").close();
  };

  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box">
        {/* Close Button */}
        <button
          type="button"
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          onClick={() => document.getElementById("my_modal_3").close()}
        >
          
        </button>

        <h3 className="font-bold text-lg mt-6">Login</h3>

        {/* Form Starts */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Email */}
          <div className="mt-4 space-y-2 py-1">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-80 px-3 py-2 border rounded-md outline-none"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">Email is required</p>
            )}
          </div>

          {/* Password */}
          <div className="mt-4 space-y-2 py-1">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-80 px-3 py-2 border rounded-md outline-none"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">Password is required</p>
            )}
          </div>

          {/* Buttons */}
          <div className="flex justify-between items-center mt-6">
            <button
              type="submit"
              className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"
            >
              Login
            </button>
            <p className="text-sm">
              Not registered?{" "}
              <Link
                to="/Signup"
                className="underline text-blue-500 cursor-pointer"
              >
                Signup
              </Link>
            </p>
          </div>
        </form>
      </div>
    </dialog>
  );
}

export default Login;
