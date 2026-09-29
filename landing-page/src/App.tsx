import Navbar from './layouts/Navbar';
import Hero from './layouts/Hero';
import Funcionalidades from './layouts/Funcionalidades';
import Container from './components/Container';
import Info from './layouts/Info';
import Contact from './layouts/Contact';
import Footer from './layouts/Footer';

function App() {

  return (
    <>
        <Navbar />
      <Container >
        <Hero />
        <Funcionalidades />
        <Info />
        <Contact />
      </Container>
        <Footer />
    </>
  )
}

export default App
