import './JournalItem.css';

function JournalItem({ title, text, date }) {
  const formattedDate = new Intl.DateTimeFormat('ru-RU').format(date);

  return (
    <>
      <span className="journal-item__header">{title}</span>
      <span className="journal-item__body">
        <time className="journal-item__date" datetime="{formattedDate}">{formattedDate}</time>
        <span className="journal-item__text">{text}</span>
      </span>
    </>
  );
}

export default JournalItem;
