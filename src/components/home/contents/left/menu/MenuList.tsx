/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';
import mediaSize from '../../../../../styles/mediaSize';
const Wrapper = styled.div`
    & li{
        position: relative;
    }
    & li a{
        font-size: 16px;
        text-transform: uppercase;
        color: #878787;
        border-bottom: 1px solid #dbdbdb;
        padding: 10px;
        display: block;
        transition: box-shadow 0.34s ease, background 0.34s ease;
        &:hover {
            box-shadow: inset 180px 0 0 0 rgba(36, 130, 174, 0.7);
            color: #fff;
            background: rgba(36,130,174,0.9);
        }
    }
    & li a i{
        position: absolute;
        right: 10px;
        top: 15px;
    }
    @media only screen and (max-width:${mediaSize.W600}){
        & ul{
            overflow: hidden;
            
        }
        & li {
            width: 33.3333%;
            float: left;
            text-align: center;
            border-right: 1px solid #dbdbdb;
            box-sizing:border-box;
            &:nth-child(3n){
                border-right: 0;
            }
            &:nth-child(n+4) a{
                border-bottom: 0;
            }
        }
        & li a{
            color: #fff;
            text-shadow: 0 0 5px rgba(0, 0, 0, 0.7);
            &:hover{
                box-shadow: 0;
                background:rgba(36, 130, 174, 0.3);
            }
        }
        & li a i{
            display: none;
        }
    }
`;

const menu = ["innovative", "Creativity", "Continuous", "sustainability", "Communication"];

const MenuList: React.SFC = () => {
    const menuList = menu.map(val => <li key={val}><a href="#">{val}<i className="fa fa-angle-double-right" aria-hidden="true" /></a></li>)
    return (
        <Wrapper>
            <ul>
                {menuList}
            </ul>
        </Wrapper>
    );
};

export default MenuList;
