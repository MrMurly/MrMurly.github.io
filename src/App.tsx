import "./App.css";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ProjectView } from "./components/ProjectView";

function App() {
  return (
    <div className="font-mono text-white">
      <Header />

      <div className="flex justify-center w-5/6 m-auto flex-col content-center mt-5">
        <ProjectView />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
