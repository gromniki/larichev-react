import './App.css';
import Button from './components/Button/Button';
import CardButton from './components/CardButton/CardButton';
import JournalItem from './components/JournalItem/JournalItem';

function App() {
  const data = [
		{
			title: 'Подготовка к обновлению курсов',
			text: 'Горные походы открывают удивительные природные ландшафты',
			date: new Date()
		},
		{
			title: 'Поход в годы',
			text: 'Думал, что очень много времени',
			date: new Date()
		}
	];

  // Мой вариант
  // function formattedDate() {
  //   const formatter = new Intl.DateTimeFormat('ru-RU', { /* Параметры форматирования */ });
  //   return formatter.format(new Date());
  // }

  return (
    <>
      <h1>Курс по React от Ларичева</h1>
      <p>Вспомогательный текст</p>
      <Button/>
      <CardButton>
        <JournalItem
          title={data[0].title}
          text={data[0].text}
          date={data[0].date}
        />
      </CardButton>
      <CardButton>
        <JournalItem
          title={data[1].title}
          text={data[1].text}
          date={data[1].date}
        />
      </CardButton>
    </>
  );
}

export default App;
