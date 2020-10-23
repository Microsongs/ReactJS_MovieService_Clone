import React from 'react';
import PropTypes from "prop-types"

const foodILike = [
  {
    id : 1,
    name : "Kimchi",
    image : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR1HuLwzPb9tpfKtGCWVlMW-vipU_K3D7ZLoQ&usqp=CAU",
    rating : 5
  },
  {
    id : 2,
    name : "ramen",
    image : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSZy8Xa_-V96PpI8hjj1l7bUpg5K0EE2RIQKQ&usqp=CAU",
    rating : 4.8
  },
  {
    id : 3,
    name : "tonkatsu",
    image : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQdUCrIgLf1JU6SADwqgv2GYyy0xp0_dm7fsg&usqp=CAU",
    rating : 4.5
  },
  {
    id : 4,
    name : "kimbap",
    image : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRnhjF8IiOTERtznA6rr9JmSa-JzELZlNM2NA&usqp=CAU",
    rating : 4.2
  }
  
]

function Food({name, picture, rating}){
  return <div>
    <h2>I like {name}</h2>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name} />
  </div>
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  rating : PropTypes.number.isRequired
};

function App() {
  // map은 각각의 아이템별로 function을 호출한다.
  // console.log에서는 food name = {} />을 하고 있다
  // map은 리스트 안에 들어갈 때 유일성을 잃어버림 -> id를 삽입
  return (
    <div className="App">
      {foodILike.map(dish =>(
        <Food 
         key = {dish.id}
         name={dish.name} 
         picture = {dish.image} 
         rating={dish.rating} />
      ))}
    </div>
  );
}

export default App;
