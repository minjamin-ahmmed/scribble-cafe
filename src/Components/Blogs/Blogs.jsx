import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {

    const [blogs, setBlogs] = useState([])

    useEffect(()=>{

        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
     

    },[])


    return (
        <div className='lg:col-span-2 border-2 border-blue-600'>
            <h1>Blogs Will Be Store Here: {blogs.length} </h1>
            {
                blogs.map((blog) => <Blog 
                key={blog.id}
                blog={blog}
                ></Blog>)
            }
        </div>
    );
};

export default Blogs;