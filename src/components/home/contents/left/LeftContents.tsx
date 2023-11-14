import React from 'react';
import styled from 'styled-components';
import { Menu, Notice, Blog, } from './';
import { SU } from '../../../../styles/IR';
import mediaSize from '../../../../styles/mediaSize';
const Wrapper = styled.section`
    float: left;
    width: 250px;
    @media only screen and (max-width:${mediaSize.W768}) {
        float: none;
        width: 100%;
    }
`;

const LeftContents: React.SFC = () => {
    return (
        <Wrapper>
            <h3><SU>반응형 사이트 왼쪽 컨텐츠</SU></h3>
            <Menu/>
            <Notice/>
            <Blog/>
        </Wrapper>
    );
}

export default LeftContents;