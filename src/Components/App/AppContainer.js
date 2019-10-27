import React, { Component } from "react";
import AppPresenter from "./AppPresenter";
import Store from "../../store";

class AppContainer extends Component{
    constructor(props){
        //provvider에 포함될 함수는 생성자에 있어야한다.
        super(props);
        //provider에서 사용할 함수 생성
        this._seeNotification = (id) => {
            this.setState(currnetState => {
                return {
                    ...currnetState,
                    notifications: {
                        ...currnetState.notifications,
                        [id]: {
                            ...currnetState.notifications[id],
                            seen:true
                        }
                    }
                }
            })
        }
        this._deleteNotification = (id) => {
            this.setState(currnetState => {
                const newState = delete currnetState.notifications[id];
                return newState
            })
        }
        
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
            },
            deleteNotification: this._deleteNotification,
            seeNotification: this._seeNotification
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