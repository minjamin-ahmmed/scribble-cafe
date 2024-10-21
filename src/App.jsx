import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {


  return (
    <>
    <div className='w-9/12 mx-auto py-5'>
      <Header></Header>

     <div className='grid grid-cols-1 lg:grid-cols-3'>

     <Blogs></Blogs>

     <Bookmarks ></Bookmarks>

     </div>
    </div>
    
    </>
  )
}

export default App
