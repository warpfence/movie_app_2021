// import React from "react";
// import PropTypes from "prop-types";

// const FoodILike = [
//   {
//     id: 1,
//     name: "Kimchi",
//     image: "https://www.bgw.kr/wp-content/uploads/2019/12/%ED%8F%AC%EA%B8%B0%EA%B9%80%EC%B9%98-1200x1200.png",
//     rating: 1
//   },
//   {
//     id: 2,
//     name: "Kimbap",
//     image: "https://www.bgw.kr/wp-content/uploads/2019/12/%ED%8F%AC%EA%B8%B0%EA%B9%80%EC%B9%98-1200x1200.png",
//     rating: 2
//   },
//   {
//     id: 3,
//     name: "Doncasu",
//     image: "https://www.bgw.kr/wp-content/uploads/2019/12/%ED%8F%AC%EA%B8%B0%EA%B9%80%EC%B9%98-1200x1200.png",
//     rating: 3
//   }
// ];

// function Food({ name, picture, rating }) {
//   return (
//     <div>
//       <h1>I like {name}</h1>
//       <h4>{rating}/5</h4>
//       <img src={picture} alt={name} />
//     </div>
//   );
// }

// Food.propTypes = {
//   name: PropTypes.string.isRequired,
//   picture: PropTypes.string.isRequired,
//   rating: PropTypes.number.isRequired
// };

// function rederFood(dish) {
//   return <Food
//     key={dish.id}
//     name={dish.name}
//     picture={dish.image}
//     rating={dish.rating}
//   />
// }

// function App() {
//   return (
//     <div className="App">
//       {
//         FoodILike.map(rederFood)
//       }
//     </div>
//   );
// }

// export default App;