import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Components/Header";
import RouterApp from "./Route/RouterApp";
import MenuPhone from "./Components/MenuPhone";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <RouterApp />
      {/* <Footer/> */}
    </>
  );
}

export default App;
