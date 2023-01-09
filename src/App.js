import { Home, Navbar, Client, Footer, Services } from "./components";
import Testimonial from "./components/testimonial";
import './style.scss'

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Client/>
      <Services/>
      <Testimonial/>
      <Footer/>
      </>
  );
}

export default App;
