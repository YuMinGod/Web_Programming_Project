import React from 'react';
import styled from 'styled-components';
import BlockFrame, { BlockWrapper } from '../../frame/BlockFrame';
import mediaSize from '../../../../../styles/mediaSize';
import OneLineNotice from './OneLineNotice';
import TwoLineNotice from './TwoLineNotice';

const Wrapper = styled(BlockWrapper)`

    @media only screen and (max-width:${mediaSize.W600}){
        background: #fff;
    }
`;

const Notice:React.SFC = () => {
    return(
        <Wrapper>
            <BlockFrame col_title="Stack" col_desc="Python, Java, Spring Boot, JavaScript, TypeScript">
                <React.Fragment>
                    <OneLineNotice/>
                    <TwoLineNotice/>
                </React.Fragment>
            </BlockFrame>
        </Wrapper>
    );
}

export default Notice;