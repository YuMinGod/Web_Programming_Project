import React from 'react';
import styled from 'styled-components';
import { Container } from '../../../styles/baseStyles';
import {LeftContents, CenterContents, RightContents} from '../../../components/home/contents';
import { SU } from '../../../styles/IR';
import mediaSize from '../../../styles/mediaSize';
const Wrapper = styled.main`
    ${Container}{
        border-left: 1px solid #dbdbdb;
        border-right: 1px solid #dbdbdb;
        @media only screen and (max-width:${mediaSize.W1220}){
            border: 0;
        }
    }
`;

const Contents: React.SFC = () => {
    return (
        <Wrapper>
            <Container>
                <h2><SU>반응형 웹사이트</SU></h2>
                <LeftContents/>
                <CenterContents/>
                <RightContents/>
            </Container>
        </Wrapper>
    )
}

export default Contents;