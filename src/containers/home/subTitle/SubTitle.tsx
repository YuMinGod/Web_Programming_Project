import React from 'react';
import styled from 'styled-components';
import { Container } from '../../../styles/baseStyles';
import {SubTitleBlock} from '../../../components/home/subTitle';

const Wrapper = styled.article`
    background: #eaf7fd;
`;
const SubTitle: React.SFC = () => {
    return (
        <Wrapper>
            <Container>
                <SubTitleBlock/>
            </Container>
        </Wrapper>
    )
}

export default SubTitle;