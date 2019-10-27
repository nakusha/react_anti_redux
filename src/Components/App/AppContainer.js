import React, { Component } from "react";
import AppPresenter from "./AppPresenter";
import Store from "../../store";

class AppContainer extends Component{
    constructor(props){
        //provvider에 포함될 함수는 생성자에 있어야한다.
        super(props);
        //provider에서 사용할 함수 생성
        this._changeMessage = () => {
            if (this.state.message === "Hello"){
                this.setState({
                    message: "Bye bye"
                });
            } else{
                this.setState({
                    message:"Hello"
                });
            }
        }
        this.state = {
            message: "Hello",
            changeMessage: this._changeMessage
        };
    }
    render(){
        return (
            <Store.Provider value={this.state}>
                <AppPresenter/>
            </Store.Provider>
        );
    }
}

export default AppContainer