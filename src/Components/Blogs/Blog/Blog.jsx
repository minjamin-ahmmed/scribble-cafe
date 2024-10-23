import PropTypes from 'prop-types';
import { IoBookmarksOutline } from "react-icons/io5";

const Blog = ({blog, handleBookmarks, handleMarkAsRead, handleReadingTime}) => {
 

    const {cover_img,author_img,author_name,posted_date,title, hashtags, reading_time} = blog
    
    return (
        <div className='mb-20'>
            <div className='mb-2'>
                 <img className='rounded-xl w-full' src={cover_img} alt="" />
            </div>

            <div className='lg:flex lg:items-start  lg:justify-between'>
                <div className='flex items-center gap-4 mb-4 lg:mb-0'>
                       <img className='rounded-full w-[50px] h-[50px] object-cover' src={author_img} alt="" />

                       <div>
                        <h2 className='font-bold text-2xl'>{author_name}</h2>
                        <p className='text-lg font-medium text-gray-500'>{posted_date}</p>
                       </div>
                </div>

                <div className='flex items-center gap-2'>
                    <p className='text-xl font-medium text-gray-500'>{reading_time} min read</p>

                    <button onClick={() => handleBookmarks(blog)}
                    ><IoBookmarksOutline className='text-gray-500'></IoBookmarksOutline></button>
                    
                </div>
            </div>

            <h2 className='my-2 text-3xl font-bold text'>{title}</h2>

            <div className='flex items-center gap-2 text-gray-500 text-xl'>
               <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a className='mr-4' href=''>#{hash}</a></span>)
                }
               </p>
            </div>

            <button onClick={() => handleMarkAsRead(blog.author_id, blog.reading_time)} className='btn mt-5 underline text-blue-600'>Mark As Read</button>
            
        </div>

       

        
    );
};

Blog.propTypes = {
    blog:PropTypes.object.isRequired,
    handleBookmarks:PropTypes.func

}


export default Blog;