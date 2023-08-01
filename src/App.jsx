import './App.css'
import Footer from './Components/Footer'
import Jobs from './Components/Jobs'
import NavBar from './Components/NavBar'
import SearchBar from './Components/SearchBar'
import Value from './Components/Value'


function App() {

  return (
    <>
      <div className='w-[85%] m-auto bg-white'>
        <NavBar/>
        <SearchBar/>
        <Jobs/>
        <Value/>
        <Footer/>
      </div>
    </>
  )
}

export default App
