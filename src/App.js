import React from 'react'
import Footer from './components/Footer';
import Header from './components/Header'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <Navbar/>
      <br/>
      <Header/>
      <Footer/>
    </div>
  );
}

export default App;
