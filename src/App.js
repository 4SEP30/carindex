import "./App.css";
import About from "./components/About";
import Blog from "./components/Blog";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Parts from "./components/Parts";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Cards />
      <About />
      <Parts />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
