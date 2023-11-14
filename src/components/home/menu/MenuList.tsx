/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import { STORES } from '../../../constants';
import BaseStore from '../../../stores/Base';
import mediaSize from '../../../styles/mediaSize';
interface InjectedProps {
    [STORES.BASE_STORE]?: BaseStore;
}

interface StyledProps {
    active: boolean;
}

//Style
const Wrapper = styled.div.attrs((props: StyledProps) => ({
    active: props.active || false,
    visibleHeight: props.active ? "200px" : "0",
    visiblePadding: props.active ? "30px 10px" : "0",

}))`
    max-height: ${props => props.visibleHeight};
    padding: ${props => props.visiblePadding};
    transition: all 0.5s ease;
    overflow:hidden;

    @media only screen and (max-width:${mediaSize.W960}){
        max-height: ${props => props.active ? "560px" : "0"};
    }
    @media only screen and (max-width:${mediaSize.W600}){
        display: none;
    }
`;
const Block = styled.div`
    float: left;
    width: 40%;
    &:last-child{
        width: 20%;
        & ol li{
            width: 100%;
        }
    }
    @media only screen and (max-width:${mediaSize.W960}){
        float: none;
        width: 100%;
        &:last-child {
            width: 100%;
            & ol li{
                width :33.333333%;
            }
        }
    }
    @media only screen and (max-width:${mediaSize.W600}){
        &:last-child {
            & ol li{
                width :50%;
            }
        }
    }
    
`;
const Title = styled.h3`

    font-size: 18px;
    color: #25a2d0;
    font-weight: bold;
    margin-bottom: 4px;

`;
const List = styled.ol`
    overflow: hidden;   
    & li{
        float: left;
        width: 50%;
        position: relative;
        padding-left: 8px;
        box-sizing: border-box;
        &:before {
            content: '';
            width: 3px;
            height: 3px;
            background-color: #25a2d0;
            border-radius: 50%;
            position: absolute; 
            left: 0; 
            top: 8px;
        }
        & a{
            position:relative;
            &:after{
                content: '';
                display: inline-block;
                width: 0; 
                height: 1px;
                background:#25aad0;
                transition: all 0.2s ease-in-out;
                position: absolute;
                bottom: 0;
                left: 0;
            }
            &:hover {
                color:#25a2d0;
                &:after{
                    width: 100%; 
                }
            }
        }  
    }
    @media only screen and (max-width:${mediaSize.W960}){      
        margin-bottom: 10px;
        & li{
            width :33.333333%;
        }
    } 
    @media only screen and (max-width:${mediaSize.W600}){
        & li{
            width : 50%;
        }
    }
`;
//Style

const list1 = ["HTML 태그(Tag)", "블록 요소/인라인 요소", "DTD 선언", "언어 속성 설정", "HTML <title>", "HTML <meta>", "특수문자", "하이퍼 링크", "HTML <style>", "HTML <html>", "HTML <head>", "HTML <div>", "HTML <colgroup>", "HTML <caption>"];
const list2 = ["CSS 선택자", "CSS 단위", "CSS 색상", "CSS 선언 방법", "상대주소와 절대주소", "CSS float", "이미지 표현 방법", "이미지 스프라이트", "IR 효과", "이미지 최적화", "background-color", "border-style", "font-size", "text-align"];
const list3 = ["반응형사이트", "미디어쿼리", "CSS3", "웹 접근성 연구소", "네이버 널리", "다음 다룸", "Webstandard"];

const MenuList: React.FC<InjectedProps> = (props) => {
    const baseStore = props[STORES.BASE_STORE] as BaseStore;
    return (
        <Wrapper active={baseStore.visibleMenu}>
            <Block>
                <Title>HTML Reference</Title>
                <List>
                    {list1.map(tag => <li key={tag}><a href="#">{tag}</a></li>)}
                </List>
            </Block>
            <Block>
                <Title>CSS  Reference</Title>
                <List>
                    {list2.map(tag => <li key={tag}><a href="#">{tag}</a></li>)}
                </List>
            </Block>
            <Block>
                <Title>Responsive</Title>
                <List>
                    {list3.map(tag => <li key={tag}><a href="#">{tag}</a></li>)}
                </List>
            </Block>
        </Wrapper>
    )
}

export default inject(STORES.BASE_STORE)(observer(MenuList));