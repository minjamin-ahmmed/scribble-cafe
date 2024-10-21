import PropTypes from 'prop-types';

const Blog = ({blog}) => {
    console.log(blog);

    const {cover_img,author_img,author_name,posted_date,title} = blog
    
    return (
        <div>
            <img src={cover_img} alt="" />
        </div>
    );
};

Blog.PropTypes = {
    blog:PropTypes.object.isRequired
}


export default Blog;