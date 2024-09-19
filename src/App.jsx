import './App.css'
import Article from './components/Article'
import Header from './components/Header'
import Nav from './components/Nav'
import picOne from "./assets/blog-image-1.jpg"
import picTwo from "./assets/blog-image-2.jpg"
import Footer from './components/Footer'

function App() {

  return (
   <>
   <div className='p-10 border-l-4 ml-6 my-6'>
      <Header/>
      <Nav/>
      <Article text="11/12/20" text2="On the Street in Brooklyn" image={picOne}/>
      <Article text="11/11/20" text2="Vintage in Vogue" image={picTwo}/>
      <Footer/>
  </div>
  </>

  )
}

export default App
