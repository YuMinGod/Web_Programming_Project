import React from 'react';
import styled from 'styled-components';
import BlockFrame, { BlockWrapper } from '../../frame/BlockFrame';
import MenuList from './MenuList';
import mediaSize from '../../../../../styles/mediaSize';
const Wrapper = styled(BlockWrapper)`
    padding: 15px;
    @media only screen and (max-width:${mediaSize.W600}){
        padding: 0;
        border-bottom: 0;
        
        & h4{
            display: none;
        }
        & p{
            display: none;
        }
    }
`;

const Menu:React.SFC = () => {
    return(
        <Wrapper>
            <BlockFrame col_title="Moto" col_desc="다음과 같은 비전을 가지고 있습니다.">
                <MenuList/>
            </BlockFrame>
        </Wrapper>
    );
}

export default Menu;