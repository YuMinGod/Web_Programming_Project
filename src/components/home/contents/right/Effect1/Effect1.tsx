import React from 'react';
import styled from 'styled-components';
import BlockFrame, { BlockWrapper } from '../../frame/BlockFrame';
import mediaSize from '../../../../../styles/mediaSize';
import HoverBlock from './HoverBlock';
const Wrapper = styled(BlockWrapper)`
    @media only screen and (max-width:${mediaSize.W960}) {
        border-right: 1px solid #dbdbdb;   
    }
`;



const Effect1:React.SFC = () => {
    return(
        <Wrapper>
            <BlockFrame col_title="Intro" col_desc="웹 개발자 정유민입니다.">
                <HoverBlock/>
            </BlockFrame>
        </Wrapper>
    );
}

export default Effect1;