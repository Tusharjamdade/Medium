import { signupValidationInfer } from "@tusharjamdade/common";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignupComp() {
    const [signupInputs,setSignupInputs] = useState<signupValidationInfer>({
        email:"",
        password:"",
        name:""
    });
  return (
    
    <>
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign Up </h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    {/* <form className="space-y-6"> */}
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
          {/* <div className="text-sm">
            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
          </div> */}
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
        <button  className="flex w-full justify-center rounded-md bg-slate-950 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={()=>{
            console.log(signupInputs)
        }}>Sign up</button>
      </div>
    {/* </form> */}

    <p className="mt-5 text-center text-sm text-gray-500">
      Already have an account?
      <Link to={"/signin"} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 pl-1">Sign in/Login</Link>
    </p>
  </div>
</div>
    </>
  )
}
