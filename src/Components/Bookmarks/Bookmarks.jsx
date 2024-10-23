
import PropTypes from 'prop-types'
import Bookmark from './Bookmark/Bookmark'

const Bookmarks = ({bookmarks, readingTime, handleToggle, isToggled}) => {
    console.log(readingTime);
    
  return (
    <div className='ml-4 bg-gray-200 px-4 py-4 rounded-xl'>

            <div className='text-center p-4 font-bold text-[#6047EC] border border-[#6047EC] rounded-xl bg-[#6047ec1d] mb-5'>
                <h2>Spent Time on read: {readingTime} min</h2>
            </div>
        <div>
        <h1 className='font-bold text-xl text-center'>Bookmarked Blogs:{bookmarks.length} </h1>
        </div>

        <div className='flex items-center justify-center gap-5 my-5'>
            <button onClick={handleToggle} className='btn btn-primary '>Bookmarks</button>
            <button onClick={handleToggle} className='btn btn-primary '>History</button>
            {
                isToggled? 'ON':'Off'
            }
        </div>

    <div>
    {
        bookmarks.map(bookmark => <Bookmark 
            
            key={bookmark.id}
            bookmark={bookmark}
        
        ></Bookmark>)
    }
    </div>

    </div>

)



}

Bookmarks.propTypes = {
    bookmarks:PropTypes.array
}

export default Bookmarks