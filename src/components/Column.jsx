import Card from "./Card.jsx";

function Column() {
  return (
    <div class="main__column column">
                <div class="column__title">
                  <p>Без статуса</p>
                </div>
                <div class="cards">
                  <Card />
                  <Card />
                  <Card />
                </div>
              </div>
  );
}

export default Column;

