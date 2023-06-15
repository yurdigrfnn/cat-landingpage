import { useEffect } from "react";
import { Footer } from "./components/Footer";
import { Community } from "./features/community";
import { Description } from "./features/description";
import { Home } from "./features/home";
import { StoryAndHighlights } from "./features/storyAndHighlights";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="">
      <div className="relative md:mb-4 mb-8">
        <Home />
      </div>
      <div data-aos="fade-right">
        <Description />
      </div>
      <div data-aos="fade-up">
        <StoryAndHighlights />
      </div>
      <div data-aos="fade-up">
        <Community />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
