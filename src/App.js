import './App.css';
import { Footer, Blog, Header, Features, Possibility, WhatGPT3 } from './containers';
import {CTA, Navbar, Brand} from './components'

function App() {
  return (
    <div className="App">
      <div className='gradient_bg'>
          <Navbar />
          <Header />
        </div>
        <Brand />  
        <WhatGPT3 />
        <Features />
       < Possibility />
        <CTA />
        <Blog />
        <Footer/>
    </div>
  );
}

export default App;
