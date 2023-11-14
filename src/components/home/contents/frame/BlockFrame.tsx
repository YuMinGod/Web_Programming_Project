import React from 'react';
import styled from 'styled-components';

interface Props {
    col_title:string;
    col_desc: string;
    children: React.ReactChild;
}

export const BlockWrapper = styled.article`
    padding: 15px;
    border-bottom: 1px solid #dbdbdb;
    & > h4{
        font-size: 20px;
        color: #2f7fa6;
        padding-bottom: 5px;
    }
    & > p {
        border-bottom: 1px dashed #dbdbdb;
        padding-bottom: 15px;
        margin-bottom: 15px;
        color: #878787;
        line-height: 18px;
    }
`;

const BlockFrame:React.SFC<Props> = ({col_title, col_desc, children}) => {
    return(
        <React.Fragment>
            <h4>{col_title}</h4>
            <p>{col_desc}</p>
            {children}
        </React.Fragment>
    );
}

export default BlockFrame;