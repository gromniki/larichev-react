import './App.css';
import Button from './components/Button/Button';
import CardButton from './components/CardButton/CardButton';
import JournalItem from './components/JournalItem/JournalItem';
import Paragraph from './components/Paragraph/Paragraph';
import Title from './components/Title/Title';

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

  const pageTitle = 'Курс по React от Ларичева';
  const pageDescription = 'Вспомогательный текст';

  // const searchTitle = 'Поиск';
  // const searchText = 'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное';
  // const searchButton = 'Искать';

  const search = {
    title: 'Поиск',
    text: 'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное',
    button: 'Искать',
  };
  

  // Мой вариант
  // function formattedDate() {
  //   const formatter = new Intl.DateTimeFormat('ru-RU', { /* Параметры форматирования */ });
  //   return formatter.format(new Date());
  // }

  return (
    <>
      <h1>{pageTitle}</h1>
      <p>{pageDescription}</p>
      
      <Title title={search.title}/>
      <Paragraph paragraph={search.text} size={16}/>
      <Button btnName={search.button}/>

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
