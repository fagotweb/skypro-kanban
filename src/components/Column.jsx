import Card from "./Card.jsx";
import { SColumn } from "./Column.styled.js";

function Column({ status, cards = [] }) {
  return (
    <SColumn>
      <div>
        <p>{status}</p>
      </div>
      <div>
        {cards.map((task) => (
          <Card
            key={task._id}
            id={task._id}
            topic={task.topic}
            title={task.title}
            date={task.date}
            />
          ))}
      </div>
    </SColumn>
  );
}

export default Column;
