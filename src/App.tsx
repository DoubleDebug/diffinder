import 'flowbite';
import { Route, Router } from '@solidjs/router';
import GameSection from './components/sections/GameSection';
import DrawerFeedback from './components/navigation/feedback/DrawerFeedback';
import DrawerHowToPlay from './components/navigation/DrawerHowToPlay';
import Navbar from './components/navigation/Navbar';
import ImageGridSection from './components/sections/ImageGridSection';
import Footer from './components/navigation/Footer';
import CTASection from './components/sections/CTASection';

function App() {
  return (
    <div class="dark grid grid-rows-[min-content,auto,auto] w-full relative min-h-[100vh]">
      <Navbar />
      <DrawerHowToPlay />
      <DrawerFeedback />
      <Router>
        <Route path="/" component={CTASection} />
        <Route path="/games" component={ImageGridSection} />
        <Route path="/games/:id" component={GameSection} />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
