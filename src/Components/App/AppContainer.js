import React, { Component } from "react";
import AppPresenter from "./AppPresenter";
import Store from "../../store";

class AppContainer extends Component{
    constructor(props){
        //provvider에 포함될 함수는 생성자에 있어야한다.
        super(props);
        //provider에서 사용할 함수 생성
        
        this.state = {
            notifications:{
                "1":{
                    id:1,
                    text: "Something",
                    seen: true
                },
                "2":{
                    id:2,
                    text: "Something else",
                    seen: false
                },
                "3":{
                    id:3,
                    text: "Something else but different",
                    seen: false
                },
                "4":{
                    id:4,
                    text: "Something will happen",
                    seen: false
                }
            }
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