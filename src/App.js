
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home'
import Blog from './components/About'
import Header from './components/Header';
// import Footer from './components/Footer';

import './styles/Header.scss';
// import './styles/Footer.scss';
import './styles/Main.scss';
import './styles/Home.scss';
import './styles/Jokes.scss';
import './styles/About.scss';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<Blog />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
