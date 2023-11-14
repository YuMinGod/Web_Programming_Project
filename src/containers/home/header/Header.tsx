import React from 'react';
import styled from 'styled-components';
import { Container } from '../../../styles/baseStyles';
import {HeaderMenu, HeaderTitle, HeaderIcon} from '../../../components/home/header';
import mediaSize from '../../../styles/mediaSize';
const Wrapper = styled.header`
    height:327px;
   
    @media only screen and (max-width: ${mediaSize.W600}){
        height: auto;
    }
`;

const Header: React.SFC = () => {
    return (
        <Wrapper>
            <Container>
                <HeaderMenu/>
                <HeaderTitle/>
                <HeaderIcon/>
            </Container>
        </Wrapper>
    )
}

export default Header;