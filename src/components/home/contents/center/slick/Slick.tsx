import React from 'react';
import styled from 'styled-components';
import BlockFrame, { BlockWrapper } from '../../frame/BlockFrame';
import mediaSize from '../../../../../styles/mediaSize';
import ImageSlider from './ImageSlider';
const Wrapper = styled(BlockWrapper)`
    
    @media only screen and (max-width:${mediaSize.W768}){
        border-top: 1px solid #dbdbdb;
    }
`;

const Slick:React.SFC = () => {
    return(
        <Wrapper>
            <BlockFrame col_title="Projects" col_desc="현재까지 완성한 프로젝트 목록입니다.">
                <ImageSlider/>
            </BlockFrame>
        </Wrapper>
    );
}

export default Slick;