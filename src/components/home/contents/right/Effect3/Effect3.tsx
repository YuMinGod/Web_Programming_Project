import React from 'react';
import styled from 'styled-components';
import BlockFrame, { BlockWrapper } from '../../frame/BlockFrame';
import HoverBlock from './HoverBlock';

const Wrapper = styled(BlockWrapper)`
    border:0;
`;

const Effect3: React.SFC = () => {
    return (
        <Wrapper>
            <BlockFrame col_title="Language" col_desc="해당 언어를 구사할 수 있습니다.">
                <HoverBlock/>
            </BlockFrame>
        </Wrapper>
    );
}

export default Effect3;