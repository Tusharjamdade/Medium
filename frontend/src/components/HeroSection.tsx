import { useNavigate } from "react-router-dom"

export default function HeroSection() {
    const navigate = useNavigate();
  return (
    <div className="flex h-screen justify-center items-center dark:bg-slate-800">
    <div className="mx-auto mt-10 flex justify-center px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8">
        <div className="text-center ">
            <h1
                className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-slate-200 sm:text-5xl md:text-6xl">
                <span className="block xl:inline"><span className="mb-1 block">Task Bidder</span>
                <span className="bg-gradient-to-r from-indigo-400 to-pink-600 bg-clip-text text-transparent">
                    Post jobs and hire peoples!!
                </span>
                </span>
            </h1>
            <p className="mx-auto mt-3 max-w-xl text-lg text-gray-500 dark:text-slate-400 sm:mt-5 md:mt-5">
            TaskBidder is a freelancing website where freelancers can bid on tasks posted by clients looking for specific services. 
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
                <div className="rounded-md shadow"><button onClick={()=>{navigate("signup")}}
                        className="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-blue-700 md:py-4 md:px-10 md:text-lg"
                        >Get started for free 🚀
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
