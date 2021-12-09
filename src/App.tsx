import Particle from "./components/common/particle";
import Home from "./pages/home";
import "./styles/App.scss";

export default function App() {
  return (
    <div className="app">
      <Particle />
      <Home />
    </div>
  );
}
