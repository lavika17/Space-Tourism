import "animate.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Crew from "./pages/Crew";
import Destination from "./pages/Destination";
import Home from "./pages/Home";
import Technology from "./pages/Technology";
import NavBar from "./components/NavBar";

function App() {
  return (
    <main className="min-h-screen">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </main>
  );
}

export default App;
