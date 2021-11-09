import React from 'react';
import './App.css';
import Profile from './components/Profile/Profile.jsx';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Dialogs from './components/Dialogs/Dialogs.jsx';


const App = (props) => {
  return (
    <div className="app-wrapper">
      
      <Header />
      <Navbar />
      {/* <Profile /> */}
      <div className="app-wrapper-content">
        <Dialogs />
      </div>
      
      
    </div>
  );
}

export default App;
