import React, { Component } from 'react';
import { Header, Menu, SubTitle, Contents, Footer } from '../containers/home';
import {createGlobalStyle} from 'styled-components';

const BodyStyle = createGlobalStyle`
    body{
        background: url("https://github.com/YuMinGod/react/blob/main/public/banner.png?raw=true") repeat-x center top;
    }
`;


class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <BodyStyle/>
                <Header/>
                <Menu/>
                <SubTitle/>
                <Contents/>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default Home;