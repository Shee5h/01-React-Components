import './App.css';
import Box from './components/Box';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';


function App() {

  //manau sutvarkiau
  //tik bootstrapo javascriptas man neveikia ir nezinau kodel :(
  //bandziau ir su <Helmet /> ir su react-script-tagu ir vistiek nei taip nei taip.
  //Bandziau ir tiesiog importuoti is node_modules
  
  let data = [<Box/>, <Box/>, <Box/>, <Box/>, <Box/>, <Box/>, <Box/>, <Box/>, <Box/>];

  let boxes = data.map( e => {
    return  (
         <Box />
    )
  });

  return (
  <div>
    <Header />
    <Section />

    <div className="album py-5 bg-light">
      <div className="container">
        <div className="row">
        {boxes}
        </div>
      </div>
    </div>

    <Footer />
  </div>
  );
}

export default App;
