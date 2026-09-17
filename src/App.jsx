
import Navbar from './components/navbar.jsx'
import Footer from "./components/footer.jsx";
import Form from './components/Form.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Experience  from './components/Experience.jsx';
import Projects from './components/Projects.jsx';



function App() {


  return (
    <div>
      <div className="p-5 md:px-[10%]">
        <Navbar />
        <Home/>
      </div>

      <About />

      <div className="p-5 md:px-[10%]">
        <Experience />
        <Projects />
      </div>
      <Form />
      <Footer />
    </div>
  )
}

export default App
