import "./App.css";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Carousel from "./components/Carousel";
import PopularCategories from "./components/PopularCategories";
import PopularItems from "./components/PopularItems";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Search />
      <Carousel />
      <PopularCategories />
      <PopularItems />
      <Footer />
    </div>
  );
}

export default App;
