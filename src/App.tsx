import "./App.css";
import ReactLogo from "./assets/react.svg";
import { Card } from "./components/Card";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

const lorumIpsum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

function App() {
  return (
    <div className="font-mono">
      <Header />
      <div className="grid grid-cols-3 gap-5 p-10 ">
        <Card
          title="Portfolio"
          description={lorumIpsum}
          tags={[
            {
              title: "Hobby",
            },
          ]}
          logo={ReactLogo}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
