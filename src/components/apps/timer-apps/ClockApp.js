import React, {useState, useEffect} from 'react';

// This also seems sketchy ... creating a clock by getting the current time every second?!?
//Why not get the current time once and then use the timer to add 1000 millisec to the time every second
//Only convert to a string to display

const getTimeString = (offset) => {
 
  let shift = offset ? new Date(Date.now()).getTimezoneOffset(): 0;
  const date = new Date(Date.now() + shift * 60000);
  
  return date.toLocaleTimeString();
}

const ClockApp = () => {
  const [time, setTime] = useState(getTimeString(false));
  
  const [gTime, setGTime] = useState(getTimeString(true));

  useEffect(() => {
    const interval = setInterval(() => {
      let date = getTimeString(false);
      setTime(date);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval2 = setInterval(() => {
      let date = getTimeString(true);
      setGTime(date);
    }, 1000);

    return () => clearInterval(interval2);
  }, []);


  return (
    <div>
      <h1 className="section-title">React Clock</h1>
      <div>{time}</div>
      <p>Indianapolis, IN</p>
      <div>{gTime}</div>
      <p>Greenwich, UK</p>
    </div>
  );
};

export default ClockApp;