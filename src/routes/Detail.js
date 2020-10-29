import React from "react";
import { Redirect } from "react-router-dom";

class Detail extends React.Component{
    // 컴포넌트가 실행될 떄 실행되는 함수
    // history에는 go, goBack, goForward 이것이 url을 변경한다.
    componentDidMount(){
        const {location, history} = this.props;
        if(location.state === undefined){
            history.push("/");
        }
    }
    render(){
        const {location} = this.props;
        if(location.state){
            return <span>{location.state.title}</span>
        }
        else{
            return null;
        }
    }
}
export default Detail;