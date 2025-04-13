import About from "./components/organisms/about";
import Education from "./components/organisms/education";
import WorkExperience from "./components/organisms/work-experience";

export default function App() {
  return (
    <div className="container loading-screen">
      <div className="work-experience">
        <WorkExperience />
        <Education />
      </div>
      <About />
      <footer></footer>
    </div>
  );
}
