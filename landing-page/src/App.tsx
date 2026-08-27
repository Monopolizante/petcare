import Navbar from './layouts/Navbar';
import Hero from './layouts/Hero';
import Funcionalidades from './layouts/Funcionalidades';
import Container from './components/Container';

function App() {

  return (
    <>
      <Navbar />
    <Container >
      <Hero />
      <Funcionalidades />
    </Container>
    </>
  )
}

export default App
