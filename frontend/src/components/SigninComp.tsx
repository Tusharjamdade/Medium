import { signinValidationInfer } from "@tusharjamdade/common";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../backendURl";

export default function SigninComp() {
    const [signinInputs,setSigninInputs] = useState<signinValidationInfer>({
        email:"",
        password:""
    });
    const navigate = useNavigate()
    const signinFucntion = async ()=>{
      try {
        console.log(signinInputs)
          const responce = await axios.post(`${BACKEND_URL}/api/v1/user/signin`,signinInputs)
          const token = responce.data.token;
          console.log(responce.data.token);
          console.log("Runned signin")
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
        <label  className="block text-sm font-medium leading-6 text-gray-900">Email Address</label>
        <div className="mt-2">
          <input id="email" name="email" type="email" required className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600  dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4" placeholder=" Email" onChange={(e)=>{
            setSigninInputs({
                ...signinInputs,
                email:e.target.value
            })
          }}/>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label className="block text-sm font-medium leading-6 text-gray-900">Password</label>
          <div className="text-sm">
            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
          </div>
        </div>
        <div className="mt-2">
          <input id="password" name="password" type="password"  required className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600  dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4" placeholder=" Password" onChange={(e)=>{
            setSigninInputs({
                ...signinInputs,
                password:e.target.value
            })
          }}/>
        </div>
      </div>

      <div>
        <button  className="flex w-full justify-center rounded-md bg-slate-950 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={signinFucntion}>Sign up</button>
      </div>

    <p className="mt-5 text-center text-sm text-gray-500">
      Don't have an account?
      <Link to={"/signup"} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 pl-1">Sign up</Link>
    </p>
  </div>
</div>
    </>
  )
}
