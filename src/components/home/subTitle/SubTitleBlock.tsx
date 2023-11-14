/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {MouseEvent} from 'react';
import styled from 'styled-components';
import {inject, observer} from 'mobx-react';
import { STORES } from '../../../constants';
import BaseStore from '../../../stores/Base'
import { SU } from '../../../styles/IR';
import mediaSize from '../../../styles/mediaSize';
interface InjectedProps {
    [STORES.BASE_STORE] ?: BaseStore;
}
const Wrapper = styled.div`
    text-align: center;
    position: relative;
    & h2 {
        font-family: 'Abel', sans-serif;
        font-size: 39px;
        color: #0093bd;
        padding: 5px 0;
    }
 
    & a{
        position: absolute;
        right: 0;
        top: 5px;
        width: 60px;
        height: 60px;
        line-height: 60px;
        background: #3192bf;
        color: #fff;
        font-size: 35px;
        border-radius: 50%;
        transition: all 0.3s ease;
        &:hover{
            box-shadow: 0 0 0 3px rgba(71,154,191,0.9) inset,
            0 0 0 100px rgba(0,0,0,0.1) inset;
        }
        

    }
    @media only screen and (max-width: ${mediaSize.W1220}){
        & a{
            right: 10px;
        }
    }
    @media only screen and (max-width: ${mediaSize.W600}){
        & a{
            display: none;
        }
    }
`;

const SubTitleBlock:React.FC<InjectedProps> = (props) => {
    const baseStore = props[STORES.BASE_STORE] as BaseStore;
    const onBtn = (e:MouseEvent) => {
        e.preventDefault();
        baseStore.setVisibleMenu(!baseStore.visibleMenu);
    }
    const btnIcon = baseStore.visibleMenu ? "fa-angle-up" : "fa-angle-down";
    return(
        <Wrapper>
            <h2>Web Programming Portfolio</h2>
            <a href="#" onClick={onBtn}>
                <i className={`fa ${btnIcon}`}/>
                <SU>전체메뉴 보기</SU>
            </a>
        </Wrapper>
    )
}

export default inject(STORES.BASE_STORE)(observer(SubTitleBlock));