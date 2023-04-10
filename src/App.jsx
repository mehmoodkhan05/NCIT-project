import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from './components/header/Navbar';
import { Footer } from './components/footer/Footer';
import { Home } from './components/containers/hero/Home';
import { Courses } from './components/containers/courses/Courses';
import { About } from './components/containers/about/About';
import { Registration } from './components/containers/registration/Registration';

function App() {

  return (
    <>
      
      {/* Header */}
      <Navbar courses="Courses" about="About Us" gallery="Gallery" contact="Contact" />

      {/* containers */}
      <Home />
      <Courses />
      <About />
      <Registration />

      {/* Footer */}
      <Footer />

    </>
  )
}

export default App
