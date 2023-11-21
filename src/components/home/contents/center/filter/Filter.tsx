import React from 'react';
import styled from 'styled-components';
import BlockFrame, { BlockWrapper } from '../../frame/BlockFrame';
import Square from './Square';

const Wrapper = styled(BlockWrapper)`
    
`;

const Filter:React.SFC = () => {
    return(
        <Wrapper>
            <BlockFrame col_title="Development Status" col_desc="현재 개발중인 프로젝트 목록입니다. 개발 현황은 GitHub에서 확인할 수 있습니다.">
                <Square/>
            </BlockFrame>
        </Wrapper>
    );
}

export default Filter;