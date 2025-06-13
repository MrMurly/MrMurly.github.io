import "./App.css";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ProjectView } from "./components/ProjectView";
import { Welcome } from "./components/Welcome";

function App() {
  return (
    <div className="font-mono text-white parallax sm:fixed">
      <Header />
      <div className="flex justify-center w-5/6 m-auto flex-col content-center mt-5">
        <Welcome />
        <ProjectView />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
