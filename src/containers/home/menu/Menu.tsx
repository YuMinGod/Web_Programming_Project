/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';
import { Container } from '../../../styles/baseStyles';
import { SU } from '../../../styles/IR';
import { MenuList } from '../../../components/home/menu';

const Wrapper = styled.nav`
    background-color: #f6fdff;
`;
const Menu: React.SFC = () => {
    return (
        <Wrapper>
            <Container>
                <h2><SU>전체 메뉴</SU></h2>
                <MenuList/>
            </Container>
        </Wrapper>
    )
}

export default Menu;