import Cover from "../Cover/Cover";
import About from "../About/About";
import ServiceArea from "./ServiceArea";
import Location from "./Location";
import Products from "./Products";
import Team from "./Team";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div>
     <div className=" mx-auto max-w-7xl">
     <Cover></Cover>
      <About></About>
      <ServiceArea></ServiceArea>
      <Location></Location>
      <Products></Products>
      <Team></Team>
     </div>
     <Footer></Footer>
    </div>
  );
};

export default Home;
