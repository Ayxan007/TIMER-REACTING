import React, { useEffect, useState } from 'react';
import './App.css';

function Timer() {
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

  const startTimer = () => {
    setIsActive(true);
  };
  return (
    <div className='Timer'>
      <div className='time'>
        00:{seconds} 
        </div>
      <h2>Timer Avtomatik</h2>
      <button onClick={startTimer} disabled={isActive}>start timer</button>
    </div>
  );
}

export default Timer;
