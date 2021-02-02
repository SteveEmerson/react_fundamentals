import React, {useState, useEffect} from 'react';

const TimerApp = () => {

  const [secondsElapsed, setSecondsElapsed] = useState(0);
  const tick = () => setSecondsElapsed(secondsElapsed + 1);

  //This seems like a really bad way to make a timer.
  //Every time the seconds updates a new timer is created.
  //Testing before using the return caused the browser to eventually slow down
  // NOTE: found that can use [] as the second parameter to useEffect to only call the return on unmount
  // maybe do that and ... ?

  useEffect( () => {
    
    let interval = setInterval(() => tick(), 1000);
    console.log(interval);
    return () => clearInterval(interval);
    
  });

  return (
    <div>
      <h1 className="section-title">React Timer</h1>
      <div>Seconds Elapsed: {secondsElapsed} </div>
    </div>
  );
};

export default TimerApp;
