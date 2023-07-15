import Carrousel from './Components/Carrousel'
import NavComp from './Components/NavComp';
import Footer from './Components/Footer';
import CardContact from './Components/CardContact';
import About from './Components/About';
import CardServices from './Components/CardServices';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jump from './Components/Jump';

function App() {
  return (
    <>
      <NavComp />
      <Carrousel />
      <Jump />
      <CardServices />
      <Jump />
      <About />
      <Jump />
      <CardContact />
      <Footer />
    </>
  )
}

export default App
