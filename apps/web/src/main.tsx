import { createRoot } from "react-dom/client";
import "./style.css";
import { Banner } from "@repo/ui";

const App = () => (
  <div>
    <Banner text="Hello, I am Yogesh. Welcome to my site" speed={100} />
  </div>
);

createRoot(document.getElementById("app")!).render(<App />);
