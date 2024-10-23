import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([])
  const[remove, setRemove] = useState([])
  const [readingTime, setReadingTime] = useState(0)
  const [isToggled, setIsToggled] = useState(false)

  const handleToggle = () => {
    setIsToggled(prevState => !prevState)
  }

  const handleReadingTime = (time) => {
    setReadingTime(readingTime + time)
    console.log(time);
  }

  const handleMarkAsRead = (id, time) => {
    console.log(time);
    
    const deleteBookmark = bookmarks.find(bookmark => bookmark.author_id === id)

    const updateBookmark = bookmarks.filter(bookmark => bookmark.author_id !== id)

    setBookmarks(updateBookmark)
    setRemove([...remove, deleteBookmark])
    
    handleReadingTime(time)
  }

  const handleBookmarks = (blog) => {
    
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)
    
  }

  return (
    <>
    <div className='w-9/12 mx-auto py-5'>
      <Header></Header>
     <div className='grid grid-cols-1 lg:grid-cols-3'>

     <Blogs handleReadingTime={handleReadingTime}  handleMarkAsRead={handleMarkAsRead} handleBookmarks={handleBookmarks}
     ></Blogs>

     <Bookmarks isToggled={isToggled} handleToggle={handleToggle} readingTime={readingTime} bookmarks={bookmarks}>
      
     </Bookmarks>

     </div>
    </div>
    
    </>
  )
}

export default App
