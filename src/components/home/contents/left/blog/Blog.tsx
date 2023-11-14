import React from 'react';
import styled from 'styled-components';
import BlockFrame, { BlockWrapper } from '../../frame/BlockFrame';
import ImageBlock1 from './ImageBlock1';
import ImageBlock2 from './ImageBlock2';

const Wrapper = styled(BlockWrapper)`
    border: 0;
`;

const Blog:React.SFC = () => {
    return(
        <Wrapper>
            <BlockFrame col_title="Contact" col_desc="">
                <React.Fragment>
                    <ImageBlock1/>
                    <ImageBlock2/>
                </React.Fragment>
            </BlockFrame>
        </Wrapper>
    );
}

export default Blog;