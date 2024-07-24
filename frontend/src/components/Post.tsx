import axios from "axios"
import { useState } from "react"
import { BACKEND_URL } from "../backendURl"
import { useNavigate } from "react-router-dom"

export default function Post() {
  const [blogContent,setBlogContent] = useState({
    title:"",
    content:""
  })
  const navigate = useNavigate()
  return (
    
<a href="#" className="block m-10  p-6 bg-slate-100 border border-gray-200 rounded-lg shadow   dark:border-gray-700 ">
  <h2 className="font-bold	text-xl mb-8">Post Blog</h2>
  <div>
    <input type="text" id="first_name" className="mb-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Title" required onChange={(e)=>{
      setBlogContent({
        ...blogContent,
        title:e.target.value
      })
    }} />
  </div>       
    <textarea id="message" rows={15} className="block p-2.5 w-full text-sm " placeholder="Content of blog..." onChange={(e)=>{
      setBlogContent({
        ...blogContent,
        content:e.target.value
      })
    }}></textarea>
    <div className="flex justify-end">
    <button type="button" className="mt-4 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 " onClick={async()=>{
      const responce = await axios.post(`${BACKEND_URL}/api/v1/blog`,blogContent,{
        headers:{
          Authorization:localStorage.getItem("token")
        }
      })
      // console.log(responce);
      if(responce){
        navigate("/blogs")
      }
    }}>Post</button>
    </div>
    

</a>

  )
}
