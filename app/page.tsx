import "./globals.css";

import About from "./components/organisms/about";
import Loading from "./loading";
import Education from "./components/organisms/education";

export default function App() {
  return (
    <div className="container">
      <About />
      <Education />
      <Loading />
      <footer></footer>
    </div>
  );
}
