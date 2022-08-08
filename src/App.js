import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React from 'react';
import Chat from './Chat';
import Login from './Login';
import { useStateValue } from './StateProvider';

function App() {
  const [{user}, dispatch] = useStateValue();  /*state => {user} This is destructuring*/

  return (
    <div className='app'>
      <Router>
        {!user ? (
          <Login/>
        ): (
        <>  
        <Header/>
        <div className='app__body'>
        <Sidebar/>
        
        <Routes>
          <Route path='/room/:roomId' element={<Chat/>}/>
          <Route path='/' element={<h1>Welcome</h1>}/>
        </Routes>
        </div>
        </>
        )}
      </Router>  
    </div>
  );
}

export default App;
