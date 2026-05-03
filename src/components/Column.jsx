import Card from "./Card.jsx";
import { cardList } from "./data.js";

function Column({status}) {
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{status}</p>
      </div>
      <div className="cards">
        {cardList
        .filter((card) => card.status === status)
        .map(card => (
          <Card          
            key={card.id}            
            topic={card.topic}
            title={card.title}
            date={card.date}
          />
        ))}        
      </div>
    </div>
  );
}

export default Column;
