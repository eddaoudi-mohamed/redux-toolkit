import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Cake from "./components/Cake";
import IceCream from "./components/IceCream";
import UserList from "./components/UserList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Cake />
      <IceCream />
      <UserList />
    </>
  );
}

export default App;
