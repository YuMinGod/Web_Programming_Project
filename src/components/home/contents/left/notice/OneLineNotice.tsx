/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';
import More from './More';

const Wrapper = styled.div`
    position: relative;
    & h5 {
        font-size: 14px;
        color: #2f7fa6;
        padding-bottom: 5px;
    }
    & li{
        width: 100%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        position: relative;
        padding-left: 8px;
        &:before{
            content:'';
            width: 3px;
            height: 3px;
            border-radius: 50%;
            background: #449ce2;
            position: absolute;
            left: 0;
            top: 8px;
        }
    }
    
`;

const OneLineNotice: React.SFC = () => {
    return(
        <Wrapper>
            <h5>Education</h5>
            <ul>
                <li>Gachon University (2021 ~)<br></br>Computer Engineering</li>
            </ul>
            <More/>
        </Wrapper>
    );
};

export default OneLineNotice;

