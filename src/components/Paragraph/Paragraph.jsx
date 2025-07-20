import './Paragraph.css';

function Paragraph({ paragraph, size }) {

  return (
    <p className='paragraph' style={{fontSize: size + 'px'}}>{paragraph}</p>
  );
}

export default Paragraph;
