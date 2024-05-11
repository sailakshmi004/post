
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Register from './components/Register/register';
import Login from './components/login/login';
import Articles from './components/Articles/Articles'
import View from './components/viewArticle/viewArticle';

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );


  return (
    <>
    <BrowserRouter>
    <Routes>
    
    <Route path='/' element={<Register/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/article' element={<Articles/>}/>
    <Route path='/viewArticle' element={<View/>}/>
    
    

    
    </Routes>
    </BrowserRouter>
    </>
  );

}

export default App;
