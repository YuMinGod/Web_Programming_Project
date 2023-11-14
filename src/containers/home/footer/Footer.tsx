import React from 'react';
import styled from 'styled-components';
import { Container } from '../../../styles/baseStyles';
import FooterList from './FooterList';

const Wrapper = styled.footer`
    border-top: 1px solid #dbdbdb;
`;
const Footer: React.SFC = () => {
    return (
        <Wrapper>
            <Container>
                <FooterList/>                
            </Container>
        </Wrapper>
    )
}

export default Footer;