import React, { useEffect, useState } from 'react';
import './App.css';
import Timer from './Timer';

function App() {
  const [seconds, setSeconds] = useState(60);
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    let interval = null
    if(isActive && seconds > 0){
      interval = setInterval(()=>{
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else if (seconds === 0){
      clearInterval(interval);
      setIsActive(false);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const starTimer = () => {
    setIsActive(true);
  };
  return (
    <Timer/>
  );
}

export default App;
