import { signupValidationInfer } from "@tusharjamdade/common";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../backendURl";

export default function SignupComp() {
    const [signupInputs,setSignupInputs] = useState<signupValidationInfer>({
        email:"",
        password:"",
        name:""
    });
    const navigate = useNavigate()
    const signupFucntion = async ()=>{
      try {
        console.log(signupInputs)
          const responce = await axios.post(`${BACKEND_URL}/api/v1/user/signup`,signupInputs)
          const token = responce.data.token;
          console.log(responce.data.token);
          localStorage.setItem("token",token);
          if(token){
            navigate("/blogs")
          }
         
      } catch (error) {
        console.log("Error: ",error)
      }
    }
  return (
    
    <>
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign Up </h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <div>
        <label className="block text-sm font-medium leading-6 text-gray-900">Full Name</label>
        <div className="mt-2">
          <input  type="text" required className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600  dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4" placeholder=" Full Name" onChange={(e)=>{
            setSignupInputs({
                ...signupInputs,
                name:e.target.value
            })
          }}/>
        </div>
      </div>
      <div>
        <label  className="block text-sm font-medium leading-6 text-gray-900">Email Address</label>
        <div className="mt-2">
          <input id="email" name="email" type="email" required className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600  dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4" placeholder=" Email" onChange={(e)=>{
            setSignupInputs({
                ...signupInputs,
                email:e.target.value
            })
          }}/>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label className="block text-sm font-medium leading-6 text-gray-900">Password</label>
        </div>
        <div className="mt-2">
          <input id="password" name="password" type="password"  required className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600  dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4" placeholder=" Password" onChange={(e)=>{
            setSignupInputs({
                ...signupInputs,
                password:e.target.value
            })
          }}/>
        </div>
      </div>

      <div>
        <button  className="flex w-full justify-center rounded-md bg-slate-950 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={signupFucntion}>Sign up</button>
      </div>

    <p className="mt-5 text-center text-sm text-gray-500">
      Already have an account?
      <Link to={"/signin"} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 pl-1">Sign in/Login</Link>
    </p>
  </div>
</div>
    </>
  )
}
