import "./App.css";
import Menu from "./components/Menu.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <>
      <Menu/>
      <div className="container">
        <div className="col-12">
          <Navbar/>
        </div>
      </div>
    </>
  );
}

export default App;
