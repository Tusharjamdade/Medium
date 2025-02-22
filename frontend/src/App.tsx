import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Blogs from "./pages/Blogs";
import PostBlog from "./pages/PostBlog";
import Home from "./pages/Home";
import BlogById from "./pages/BlogById";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/signin" element={<Signin/>} />
          <Route path="/blogs" element={<Blogs/>} />
          <Route path="/post" element={<PostBlog/>} />
          <Route path="/blog" element={<BlogById/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
