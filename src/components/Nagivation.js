import React from "react";
import {Link} from "react-router-dom";
import "./Navigation.css";

// 리액트 라우터는 /about을 클릭 시 state를 /about으로 데려가고
// 바로 컴포넌트 About이 되며, props도 route로 보내준다.
function Navigation(){
    return (
    <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
    </div>
    );
}

export default Navigation;