import { useState } from 'react';
import './JournalForm.css';
import Button from '../Button/Button';

function JournalForm({ btnName }) {
  const [inputData, setInputData] = useState('');

  // Object change
  const [state, setState] = useState({
    age: 44
  });

  const inputChange = (event) => {
    setInputData(event.target.value);
    console.log(inputData);
  }

  const addJournalItem = (evt) => {
    evt.preventDefault();

    // testing
    state.age = 48;
    setState({ ...state });

    const formData = new FormData();
    const formProps = Object.fromEntries(formData);
    console.log(formProps);
  }

  return (
    <form className="journal-form" onSubmit={addJournalItem} action="">
      <input type="text" className="input" name="title" />
      <input type="date" className="input" name="date" />
      <input type="text" className="input" name="tag" onChange={inputChange} value={inputData} />
      <textarea name="post" cols="30" rows="10"></textarea>
      <Button btnName="Test" />
      <Button btnName="Сохранить" onClick={() => { console.log('Жмакнули!');}} />

      {state.age}
    </form>
  );
}

export default JournalForm;
