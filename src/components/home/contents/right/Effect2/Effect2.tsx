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

const Effect2: React.SFC = () => {
    return (
        <Wrapper>
            <BlockFrame col_title="License" col_desc="해당 자격증을 보유하고 있습니다.">
                <HoverBlock/>                
            </BlockFrame>
        </Wrapper>
    );
}

export default Effect2;