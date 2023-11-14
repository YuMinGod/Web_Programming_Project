import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.a`
    position: absolute;
    right: 0;
    top: 3px;
    color: #878787;
    text-transform: uppercase;
    font-size: 10px;
`;

const More: React.SFC = () => {
    return(
        <Wrapper href="#" title="더 보기">More <i className="fa fa-plus-circle" aria-hidden="true"/></Wrapper>
    );
}

export default More;