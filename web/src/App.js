import Footer from "./component/Footer";
import Header from "./component/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Pricing from "./Pages/Pricing";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Gallery from "./Pages/Gallery";
import Blog from "./Pages/Blog";
import SingleBlog from "./Pages/SingleBlog";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Contact from "./Pages/Contact";
function App() {
  return (
    <>
  <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/About" element={<About/>}></Route>
      <Route path="/Pricing" element={<Pricing/>}></Route>
      <Route path="/Gallery" element={<Gallery/>}></Route>
      <Route path="/Blog" element={<Blog/>}></Route>
      <Route path="/SingleBlog" element={<SingleBlog/>}></Route>
      <Route path="/Contact" element={<Contact/>}></Route>
      <Route path="/Login" element={<Login/>}></Route>
      <Route path="/Register" element={<Register/>}></Route>
      
      

    </Routes>
    <Footer/>
  </Router>
    </>
  );
}

export default App;
