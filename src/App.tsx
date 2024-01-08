import "flowbite";
import { Route, Router } from "@solidjs/router";
import GameSection from "./components/sections/GameSection";
import DrawerFeedback from "./components/navigation/DrawerFeedback";
import DrawerHowToPlay from "./components/navigation/DrawerHowToPlay";
import Navbar from "./components/navigation/Navbar";
import ImageGridSection from "./components/sections/ImageGridSection";
import Footer from "./components/navigation/Footer";
import CTASection from "./components/sections/CTASection";

function App() {
  return (
    <div class="dark grid w-full relative">
      <Navbar />
      <DrawerHowToPlay />
      <DrawerFeedback />
      <Router>
        <Route
          path="/"
          component={() => (
            <>
              <CTASection />
              <ImageGridSection />
            </>
          )}
        />
        <Route path="/games" component={ImageGridSection} />
        <Route path="/games/:id" component={GameSection} />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
