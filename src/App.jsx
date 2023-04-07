import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from './components/header/Navbar';
import { Footer } from './components/footer/Footer';

function App() {

  return (
    <>

      <Navbar courses="Courses" about="About Us" gallery="Gallery" contact="Contact" />

      <Footer />

    </>
  )
}

export default App
