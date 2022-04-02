import React from 'react';
import HeartLogo from './heart.svg';
import './App.css';

const message = "cool cud"

const Heart = (props) => {
  return (
    <div className="heart">
      <img className="heart-img" src={HeartLogo} alt="heart" />
      <p className='heart-message'>{props.msg}</p>
    </div>
  );
}

const Header = () => { 
  return <div className="App-header">I ❤️ React</div>;
}

function App() {
  return (
    <>
      <Header />
      {/* {React.createElement(Heart, { msg: message })} // Actual JavaScript code being used by React.
      {Heart({ msg: message })} Manually creating the function call for the Heart component  */}
      <Heart msg={message} />
    </>
  );
}

export default App;
