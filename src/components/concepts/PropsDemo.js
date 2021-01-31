import React, {useState} from 'react';
import PropTypes from 'prop-types';

const PropsDemo = () => {
  
  const [color, setColor] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('');
  const [borderRadius, setBorderRadius] = useState('');
  const [borderStyle, setBorderStyle] = useState('');
  const [display, setDisplay] = useState('');
  const [width, setWidth] = useState('');
  const [textAlign, setTextAlign] = useState('');

  const styles = {
    color: color,
    backgroundColor: backgroundColor,
    borderRadius: borderRadius,
    borderStyle: borderStyle,
    display: display,
    width: width,
    textAlign: textAlign
  };


  const toggleColor = () => {
    color==='white' ? setColor('purple') : setColor('white');
  }

  const toggleBackgroundColor = () => {
    backgroundColor==='purple' ? setBackgroundColor('orange') : setBackgroundColor('purple');
  }

  const toggleBorderRadius = () => {
    borderRadius==='5px' ? setBorderRadius('10px') : setBorderRadius('5px');
  }

  const toggleBorderStyle = () => {
    borderStyle==='dashed' ? setBorderStyle('solid') : setBorderStyle('dashed');
  }

  const setDivStyle = () => {
    setColor('white');
    setBackgroundColor('purple');
    setBorderRadius('5px');
    setBorderStyle('dashed');
    setDisplay('inline-block');
    setWidth('350px');
    setTextAlign('center');
    
  };

  return(
    <div className="main">
      <div className="mainDiv">
        <h4>Props Demo</h4>
        <label>Press here to set the style of the elements below.</label>
        <StyleButton function={setDivStyle}/>
        <br/>
        <div style={styles}>
          <FunctionalComponent />
          <FunctionalComponent 
            string="will this display" 
            function={toggleColor} 
            selectedStyle={color}
            />
          <FunctionalComponent 
            string="Hi mom" 
            function={toggleBackgroundColor} 
            selectedStyle={backgroundColor}/>
          <FunctionalComponent 
            string="You are the best" 
            function={toggleBorderRadius} 
            selectedStyle={borderRadius}/>
          <FunctionalComponent 
            string="There once was a boy named Eustace Clarence Scrubb; and he almost deserved it." 
            function={toggleBorderStyle} 
            selectedStyle={borderStyle}/> 
        </div>
      </div>
    </div>
  );
};

const StyleButton = (props) => {
  return (
    <div>
      <button onClick={props.function}>Set Style</button>
    </div>
  )
}
const FunctionalComponent = (props) => {
  return(
    <div>
      <p>{props.string}</p>
      <button onClick={props.function}>Press Me!</button>
      <TinyComponent selectedStyle={props.selectedStyle} />
    </div>
  );
};

const TinyComponent = (props) => {
  return(
    <div>
      <p>The current style is: {props.selectedStyle}</p>
    </div>
  )
}

FunctionalComponent.defaultProps = {
  string: 'This is wild.',
  function: () => {console.log('Can I see this in my dev tools?')},
  selectedStyle: 'what style?'
}

FunctionalComponent.propTypes = {
  string: PropTypes.string.isRequired,
  function: PropTypes.func.isRequired,
  selectedStyle: PropTypes.string.isRequired
}

export default PropsDemo;