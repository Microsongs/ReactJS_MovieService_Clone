import React from 'react';
import PropTypes from "prop-types"

// App은 React Component이다. -> React Component는 뒤에 많은 것을 가지고 있다.
// React Component를 상속받아 사용
class App extends React.Component{
  // application을 mount하자마자 mount는 생겨나는 것, 태어나는 것, 살아나는 것 이다.
  state = {
    isLoading : true,
    // 후에 movie를 채울 array
    movies: []
  };
  
  // Component가 mount되자마자 실행되는 함수
  componentDidMount(){
    setTimeout(() => {
      this.setState({ isLoading : false, book: true});
    }, 6000);
  }

  // react는 모든 class Component의 render함수를 자동으로 사용한다.
  render(){
    // this.state.isLoading
    const {isLoading} = this.state;
    return(
      <div>{isLoading ? "Loading..." : "We are ready"}</div>
    )
  };
}


export default App;
