import React, {Fragment} from "react";
import Header from "../Header";
import Flex from "styled-flex-component";
import Notification from "../Notification";

import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    ${reset};
    body{
        background-color:#ecf0f1;
    }
`
const AppPresenter = () => (
    <Fragment>
        <GlobalStyle/>
        <Header/>
        <Flex alignCenter full column>
            <Notification text={"Hello"} seen={false}/>
        </Flex>
    </Fragment>
);

export default AppPresenter;