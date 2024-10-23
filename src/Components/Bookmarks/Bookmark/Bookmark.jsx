import PropTypes from "prop-types";
const Bookmark = ({bookmark}) => {

    const {title} = bookmark;
    return (
        <div className="text-lg font-semibold bg-[#1111110c] px-4 py-4 rounded-xl my-4">
            <h3>{title}</h3>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark:PropTypes.object.isRequired
}

export default Bookmark;