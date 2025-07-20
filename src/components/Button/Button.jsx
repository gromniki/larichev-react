import './Button.css';

function Button({ btnName }) {
  return (
    <button className='button accent'>{btnName}</button>
  );
}

export default Button;
