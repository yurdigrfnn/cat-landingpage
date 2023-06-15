import { Community } from "./features/community";
import { Description } from "./features/description";
import { Home } from "./features/home";
import { StoryAndHighlights } from "./features/storyAndHighlights";

function App() {
  return (
    <div className="">
      <div className="relative md:mb-4 mb-8">
        <Home />
      </div>
      <div>
        <Description />
      </div>
      <div>
        <StoryAndHighlights />
      </div>
      <div>
        <Community />
      </div>
    </div>
  );
}

export default App;
