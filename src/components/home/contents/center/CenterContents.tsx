import React from 'react';
import styled from 'styled-components';
import { Slick, Filter, VideoBlock } from '.';
import { SU } from '../../../../styles/IR';
import mediaSize from '../../../../styles/mediaSize';
const Wrapper = styled.section`
    min-height: 1350px;
    overflow: hidden;
    margin-right: 250px;
    border-right: 1px solid #dbdbdb;
    border-left: 1px solid #dbdbdb;
    @media only screen and (max-width:${mediaSize.W960}) {
        margin-right: 0;
        border-right: 0;
    }
    @media only screen and (max-width:${mediaSize.W768}) {
        border-left: 0;
    }
`;

const CenterContents: React.SFC = () => {
    return (
        <Wrapper>
            <h3><SU>프로젝트 가운데 컨텐츠</SU></h3>
            <Slick/>
            <Filter/>
            <VideoBlock/>
        </Wrapper>
    );
}

export default CenterContents;