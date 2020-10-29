import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({id, year, title, summary, poster, genres}){
    // JS에서 css를 사용하기 위해서는 style={{}}으로 해주어야 한다.
    // 보통은 css파일을 만들어서 사용한다.
    // label for HTML속성이 있지만, js에서는 for은 loop이므로 혼동될 수 있어 htmlFor으로 사용
    return(
    <div className="movie">
        <Link to={{
            pathname:`/movie/${id}`,
            state:{
                year,
                title,
                summary,
                poster,
                genres
            }
        }}>
            <img src={poster} alt={title} title={title} />
            <div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">{year}</h5>
                <ul className="movie__genres">
                    {genres.map((genre, index) => (
                        <li key={index} className="genres__genre">{genre}</li>
                    ))}
                </ul>
                <p className="movie__summary">{summary.slice(0,180)}...</p>
            </div>
        </Link>
    </div>
    );
}

// 우리가 얻어 올 Property를 찾는 방법
Movie.propTypes = {
    // id, title, summary, poster를 가져옴
    id: PropTypes.number.isRequired,
    year : PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;