import { Description } from "./features/description";
import { Home } from "./features/home";

function App() {
  return (
    <div className="mb-10">
      <div className="relative md:mb-4 mb-8">
        <Home />
      </div>
      <div>
        <Description />
      </div>
    </div>
  );
}

export default App;
