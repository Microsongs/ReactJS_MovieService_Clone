import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

// App은 React Component이다. -> React Component는 뒤에 많은 것을 가지고 있다.
// React Component를 상속받아 사용
class Home extends React.Component{
  // application을 mount하자마자 mount는 생겨나는 것, 태어나는 것, 살아나는 것 이다.
  state = {
    isLoading : true,
    // 후에 movie를 채울 array
    movies: []
  };

  // 이 함수가 비동기라고 설정 -> 이것을 기다려야 한다.
  getMovies = async() => {
    //const movies = await axios.get("http://yts-proxy.now.sh/list_movies.json");
    //console.log(movies.data.data.movies);
    // 위와 동일하게 사용
    const {
      data: {
        data: {movies}
      }
      // rating별로 정의하기 위해 json파일 뒤에 sort by rating을 추가
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
      );
    //state에 불러온 movies데이터를 넣어준다.
    // 앞의 movies는 state, 뒤의 movies는 axios
    // this.setState({movies:movies})를 다음과 같이 표현 가능
    this.setState({ movies, isLoading:false });
  }
  
  // Component가 mount되자마자 실행되는 함수
  componentDidMount(){
    this.getMovies();
  }

  // react는 모든 class Component의 render함수를 자동으로 사용한다.
  render(){
    // this.state.isLoading
    const {isLoading, movies} = this.state;
    // 랜더링 방법 1. -> renerMovies라는 함수를 생성하여 사용 2. 그냥 있는 것을 그대로 불러와서 사용
    // HTML에서의 class는 css의 class이지만, javaScript에서는 js의 class와 혼동될 수 있으므로 className을 사용한다.
    return(
      <section className="containter">
        {isLoading ? 
        // isLoading을 기준으로 로딩중일 경우 Loading...을 호출 아닐 경우 로딩화면을 송출
        (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) 
          :
        // movies를 movie에 넣는다. 
        (
          <div className="movies">
            {movies.map(movie => (
              <Movie
                key = {movie.id}
                id = {movie.id}
                year = {movie.year}
                title = {movie.title}
                summary = {movie.summary}
                poster = {movie.medium_cover_image}
                genres = {movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    )
  }
}

export default Home;
