import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ProjectView } from "./components/ProjectView";

function App() {
  return (
    <div className="font-mono text-white">
      <Header />
      <ProjectView />
      <Footer />
    </div>
  );
}

export default App;
