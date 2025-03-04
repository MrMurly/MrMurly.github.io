import "./App.css";
import ReactLogo from "./assets/react.svg";
import { Card } from "./components/Card";

const lorumIpsum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

function App() {
  return (
    <>
      <div className="grid grid-cols-3 gap-5">
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
    </>
  );
}

export default App;
