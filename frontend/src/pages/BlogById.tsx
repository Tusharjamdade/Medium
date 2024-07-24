import axios from "axios"
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../backendURl"
import { useSearchParams } from "react-router-dom"
import BlogCard from "../components/BlogCard"


export default function BlogById() {
    const [url] = useSearchParams()
    const [blogContent,setBlogContent]=useState({
      authorId:0,
      id:0,
      title:"",
      content:"",
      publishDate:"",
      author:{
          name:""
      }
  })
  useEffect(() => {
      axios.get(`${BACKEND_URL}/api/v1/blog/`+url.get("id"),{
          headers:{
              Authorization:localStorage.getItem("token")
          }
      }).then(result=>{
          setBlogContent(result.data.result)
          
          console.log(result.data.result)
      })
    },[]);
    // useEffect(()=>{
    //   axios.get(`${BACKEND_URL}/api/v1/blog/`+url.get("id"),{
    //     headers:{
    //       Authorization:localStorage.getItem("token")
    //     }
    //   }).then((res)=>{
    //     console.log(res.data)
    //   })
    // })
  return (
    <div>
      <BlogCard isBlog={true}name={blogContent.author.name} title={blogContent.title} content={blogContent.content} publishDate={blogContent.publishDate} autherId={blogContent.id}/>
    </div>
  )
}
