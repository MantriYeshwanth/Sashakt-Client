import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

import AgeTwelveAndMore from "./component/AgeTwelveAndMore";
import About from "./component/About";
import ParentalH from "./component/ParentalH";
import Contact from "./component/Contact";
import Credits from "./component/Credits";
import GamingPage from "./component/GamingPage";
import Jigsaw from "./component/games/Jigsaw";
import Cross from "./component/games/Cross";
import Snake from "./component/games/Snake";
import Unscram from "./component/games/Unscram";
import Board from "./component/games/Board";
import MemoryGame from "./component/games/MemoryGame";

import WheelApp from "./component/games/Wheel";

import Helpline from "./component/Helpline";
import Setting from "./component/Setting";
import Carousel from "./component/Carousel";
import QuizPage from "./component/QuizPage";
import VideoPlayer from "./component/VideoPlayer";
import LearningPage from "./component/LearningPage";
import PNavbar from "./component/ProjNavbar";
// import PFooter from './component/ProjFooter';
import Among from "./component/buttonnss/Among";
import LandingPage from "./component/LS";
import SimpleLoginPage from "./component/Login";
import NicknameGenerator from "./component/Signup";
import VideoDisplay from "./component/VideoDisplay";
import FaqComponent from "./component/FAQ";
import CrosswordGame from "./component/games/CrosswordGame";

function App() {
  return (
    <div className="container-fluid">
      <PNavbar />
      <Routes>
        {/* <Route path='/ls' element={<LandingPage />} /> */}
        <Route path="Login" element={<SimpleLoginPage />} />
        <Route path="/register" element={<NicknameGenerator />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/age12" element={<AgeTwelveAndMore />} />
        <Route path="/about" element={<About />} />
        <Route path="/parental" element={<ParentalH />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/credit" element={<Credits />} />
        <Route path="/gaming" element={<GamingPage />} />
        <Route path="/learning" element={<LearningPage />} />
        <Route path="/jigsaw" element={<Jigsaw />} />
        <Route path="/cross" element={<Cross />} />
        <Route path="/card" element={<MemoryGame />} />
        <Route path="/snake" element={<Snake />} />
        <Route path="/unscram" element={<Unscram />} />
        <Route path="/board" element={<Board />} />
        <Route path="/spin" element={<WheelApp />} />
        <Route path="/helpa" element={<Helpline />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/carousel" element={<Carousel />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/video" element={<VideoPlayer />} />
        <Route path="/VideoDisplay" element={<VideoDisplay />} />
        <Route path="/FAQ" element={<FaqComponent />} />

        <Route path="/among" element={<Among />} />
        <Route path="/CrossWord" element={<CrosswordGame />} />
      </Routes>
      {/* <Link
              to='/helpa'
              style={{
                textDecoration: 'none',
                position: 'fixed',
                bottom: '80px',
                left: '20px',
              }}
            >
              <Among />
          </Link> */}
    </div>
  );
}

export default App;
