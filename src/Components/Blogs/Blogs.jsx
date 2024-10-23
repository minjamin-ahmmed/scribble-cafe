import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({handleBookmarks, handleMarkAsRead, handleReadingTime}) => {

    const [blogs, setBlogs] = useState([])

    useEffect(()=>{

        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
     

    },[])


    return (
        <div className='lg:col-span-2'>


            {
                blogs.map((blog) => <Blog 
                key={blog.id}
                blog={blog}
                handleBookmarks={handleBookmarks}
                handleMarkAsRead={handleMarkAsRead}
                handleReadingTime={handleReadingTime}
               
                ></Blog>)
            }
        </div>
    );
};


Blogs.propTypes = {
    handleBookmarks: PropTypes.func
}


export default Blogs;