import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from './components/header/Navbar';
import { Footer } from './components/footer/Footer';
import { Home } from './components/containers/hero/Home';

function App() {

  return (
    <>
      
      {/* Header */}
      <Navbar courses="Courses" about="About Us" gallery="Gallery" contact="Contact" />

      {/* containers */}
      <Home />

      {/* Footer */}
      <Footer />

    </>
  )
}

export default App
