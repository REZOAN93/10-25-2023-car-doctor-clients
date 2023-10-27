import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";

function App() {
  return (
    <div>
      <div>
        <Header></Header>
        <Outlet></Outlet>
      </div>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
