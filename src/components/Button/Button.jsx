import './Button.css';
import { useState } from 'react';

function Button({ btnName, onClick }) {
  // let text = 'Сохранить';
  const [text, setText] = useState('Сохранить');
  console.log('Rerender!');

  const clicked = () => {
    setText(t => t + '! Закрыть');
    console.log(text);
  }

  return (
    <button 
      className='button accent'
      onClick={onClick}
    >{btnName ? btnName : text}</button>
  );
}

export default Button;
