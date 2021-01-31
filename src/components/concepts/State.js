import React, {useState} from 'react';

const State = () => {
  return (
    <div className="main">
      <div className="mainDiv">
        <ul>
          <dt>useState is unique to functional components.</dt>
          <dd>Class components have a seperate way of using and changing state.</dd>
          <dt>useState uses array destructuring.</dt>
          <dd>useState provides a state variable and a setState function.</dd>
          <dt>useState is a hook.</dt>
          <dd>The hook is baked into React.</dd>
          <dt>Triggers Re-renders</dt>
          <dd>Like with props changes, changing the state of a component re-renders the whole component.</dd>
        </ul>
      </div>
      <StateExample />
    </div>
  );
};

function StateExample() {
  const [text, setText] = useState('initial value');
  const [likeNum, setLikeNum] = useState(0);
  const [textColor, setTextColor] = useState('blue');
  return(
    <div>
      <input value={text}  onChange={e => setText(e.target.value)} />
      <img
        style={{width:'100px', height:'100px'}} 
        src="https://upload.wikimedia.org/wikipedia/commons/1/13/Facebook_like_thumb.png" 
        onClick={e => setLikeNum(likeNum + 1)}
        alt="Facebook like thumb"
      />
      <span>{likeNum}</span>
      <br/>
      <br/>
      <p
        style={{color:textColor}}
        onMouseEnter={e => setTextColor('red')}
        onMouseLeave={e => setTextColor('blue')}>The color of this text will change.</p>
    </div>
  );
};

export default State;