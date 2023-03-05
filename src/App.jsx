import Header from './components/Header';
import Footer from './components/Footer';
import MovieCard from './components/MovieCard';

import './styles/global.scss';

function App() {
  return (
    <div className="background">
      <Header />
      <MovieCard />
      <Footer />
    </div>
  );
}

export default App;
