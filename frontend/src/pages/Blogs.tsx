import axios from "axios";
import BlogCard from "../components/BlogCard";
import NavBar from "../components/NavBar";
import { BACKEND_URL } from "../backendURl";
import { useEffect, useState } from "react";
import { RecoilRoot } from "recoil";
import Footer from "../components/Footer";

export default function Blogs() {
    const [blogContent,setBlogContent]=useState([{
        authorId:0,
        id:0,
        title:"",
        content:"",
        publishDate:"",
        author:{
            name:""
        }
    }])
    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`,{
            headers:{
                Authorization:localStorage.getItem("token")
            }
        }).then(result=>{
            setBlogContent(result.data.result)
            
            console.log(result.data.result)
        })
        setInterval(()=>{
            axios.get(`${BACKEND_URL}/api/v1/blog/bulk`,{
                headers:{
                    Authorization:localStorage.getItem("token")
                }
            }).then(result=>{
                setBlogContent(result.data.result)
                
                console.log(result.data.result)
            })
        },60000)
      },[]);
  return (
    <div>
        <NavBar/>
        <RecoilRoot>
            {blogContent.map((blog)=>{
                return <BlogCard name={blog.author.name} title={blog.title} content={blog.content} publishDate={blog.publishDate} autherId={blog.id}/>
            })}
        </RecoilRoot>
        <Footer/>
    </div> 

  )
}
