import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Carreira from './containers/Carreira';
import { MainContainerStyle } from './styles';

function App() {
  return (
    <div className="App">
      <Header />
      <MainContainerStyle>
        <Carreira/>
      </MainContainerStyle>
      <Footer />
    </div>
  );
}

export default App;
