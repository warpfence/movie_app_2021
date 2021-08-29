import React from "react";

const FoodILike = [
  {
    id: 1,
    name: "Kimchi"
  },
  {
    id: 2,
    name: "Kimbap"
  },
  {
    id: 3,
    name: "Doncasu"
  }
];

function Food({ name, picture }) {
  return (
    <div>
      <h1>I like {name}</h1>
      <img src={picture} alt={name} />
    </div>)
}

function rederFood(dish) {
  return <Food key={dish.id} name={dish.name} picture={dish.picture} />
}

function App() {
  return (
    <div className="App">
      {
        FoodILike.map(rederFood)
      }
    </div>
  );
}

export default App;