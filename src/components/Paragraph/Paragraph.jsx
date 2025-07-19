import './Paragraph.css';

function Paragraph({ paragraph, size }) {
  const fontSize = 'font-size=' + {size} + 'px';
  //const fontSize = `font-size=${size}px`;
  
  return (
    <p className='paragraph' style={{fontSize: size + 'px'}}>{paragraph}</p>
  );
}

export default Paragraph;
