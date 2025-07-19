import './JournalItem.css';

function JournalItem({ title, text, date }) {
  const formattedDate = new Intl.DateTimeFormat('ru-RU').format(date);

  return (
    <>
      <h2 className="journal-item__header">{title}</h2>
      <div className="journal-item__body">
        <time className="journal-item__date" datetime="{formattedDate}">{formattedDate}</time>
        <div className="journal-item__text">{text}</div>
      </div>
    </>
  );
}

export default JournalItem;
