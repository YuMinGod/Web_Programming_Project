import React from 'react';
import styled from 'styled-components';
import { Effect1, Effect2, Effect3 } from '.';
import { SU } from '../../../../styles/IR';
import mediaSize from '../../../../styles/mediaSize';
const Wrapper = styled.section`
    width: 250px;
    position: absolute;
    top: 0;
    right: 0;
    @media only screen and (max-width:${mediaSize.W960}) {
        position:static;
        width: 100%;
        border-top: 1px solid #dbdbdb;
        display: flex;
    }
`;

const RightContents: React.SFC = () => {
    return (
        <Wrapper>
            <h3><SU>반응형 사이트 오른쪽 컨텐츠</SU></h3>
            <Effect1 />
            <Effect2 />
            <Effect3 />
        </Wrapper>
    );
}

export default RightContents;