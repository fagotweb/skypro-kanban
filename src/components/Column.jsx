import Card from "./Card.jsx";
import { SColumn } from "./Column.styled.js";
import { cardList } from "./data.js";

function Column({status}) {
  return (
    <SColumn>
      <div>
        <p>{status}</p>
      </div>
      <div>
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
    </SColumn>
  );
}

export default Column;
