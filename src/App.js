import React from 'react';

function Food({name, picture}){
  return <div>
    <h2>I like {name}</h2>
    <img src={picture} alt={name} />
  </div>
}

function App() {
  // map은 각각의 아이템별로 function을 호출한다.
  // console.log에서는 food name = {} />을 하고 있다
  // map은 리스트 안에 들어갈 때 유일성을 잃어버림 -> id를 삽입
  return (
    <div className="App">
      {foodILike.map(dish =>(
        <Food key = {dish.id} name={dish.name} picture = {dish.image} />
      ))}
    </div>
  );
}

export default App;
