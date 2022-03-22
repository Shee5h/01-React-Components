import './App.css';
import Box from './components/Box';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';

function App() {
  return (
  <div>
    <Header />
    <Section />

    <div className="album py-5 bg-light">
      <div className="container">
        <div className="row">
          <Box />
          <Box />
          <Box />
          <Box />
          <Box />
          <Box />
          <Box />
          <Box />
          <Box />
        </div>
      </div>
    </div>

    <Footer />
  </div>
  );
}

export default App;
