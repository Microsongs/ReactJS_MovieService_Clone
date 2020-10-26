import React from "react";
import PropTypes from "prop-types";

function Movie({id, yera, title, summary, poster}){
    return <h5>{title}</h5>

}

// 우리가 얻어 올 Property를 찾는 방법
Movie.propTypes = {
    // id, title, summary, poster를 가져옴
    id: PropTypes.number.isRequired,
    year : PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired

};

export default Movie;