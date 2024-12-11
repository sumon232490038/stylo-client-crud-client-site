import { Outlet } from "react-router-dom";
import "./App.css";
import Navber from "./components/Navber";

function App() {
  return (
    <div className="mx-auto max-w-5xl">
      <header>
        <Navber></Navber>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
}

export default App;
