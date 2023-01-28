import React from 'react';
import './index.css';

function App() {

  const [color, setColor] = React.useState('');
  const [answers, setAnswers] = React.useState([]);
  const [isCorrect, setIsCorrect] = React.useState(false);
  const [isStarted, setIsStarted] = React.useState(false);


  React.useEffect(() => {
    generateColors()
  }, [])

  function generateColors() {
    const correctColor = getRandomColor();
    setColor(correctColor)
    setAnswers([correctColor, getRandomColor(), getRandomColor()].sort(
        () => 0.5 - Math.random()
      ))
    
  }

  function getRandomColor() {
    const color = '#' + Math.floor(Math.random()*16777215).toString(16);
    return color;
  }

  function handleClick(selectedColor) {
    setIsStarted(true)
    if (selectedColor === color) {
      setIsCorrect(true);
      generateColors()
    } 
    else {
      setIsCorrect(false)
    }

  }

    return (
      <div className="main">
        <div className="block" style={{background: `${color}`}}></div>
        <div>
          {answers.map((item) => {
            return (
              <button onClick={() => handleClick(item)} key={item}>{item}</button>
            )
          })}
        </div>
        { !isStarted ?  '' : 
        !isCorrect ? <span className='wrong'>Wrong answer</span> : ''}
        {isStarted && isCorrect ?  <span className='correct'>Correct!</span> : ''}
      </div>
    )
  
}

export default App;
