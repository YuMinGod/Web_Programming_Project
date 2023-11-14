import React from 'react';
import Slider, { Settings } from "react-slick";
import styled from 'styled-components';
import mediaSize from '../../../../../styles/mediaSize';
const Wrapper = styled.div`
    & .slick-slider{
        overflow: hidden;
        position: relative;
    }
    
    & .slick-track {
        display: flex;
        justify-content: space-between;
        
    }
    & .slick-active{
        & figcaption em, span{
            opacity: 1;
            transform: translateX(0);
        }
    }
    & .slick-dots {
        display: block;
        width: 100%;
        text-align: center;
        & li{
            display: inline-block;
            width: 15px;
            height: 15px;
            margin: 5px;
            & button{
                font-size: 0;
                line-height: 0;
                display: block;
                width: 15px;
                height: 15px;
                cursor: pointer;
                background: #5dbfed;
                border-radius: 50%;
            }
        }
        
        & .slick-active{
            & button{
                background: #2980b9;
            } 
        }
    }
    & .slick-prev{
        position: absolute;
        display: inline-block;
        left: 0;
        bottom: 0;
        z-index: 1000;
        width: 30px;
        height: 25px;
        text-indent: -9999px;
        &::before{ 
            content: '\f053';
            font-family: 'Font Awesome 5 Free';
            font-weight: 900;
            color: #5dbfeb;
            text-indent: 0;
            position: absolute;
            left: 9px;
            top: 6px;
        }
    }
    & .slick-next{
        position: absolute;
        display: inline-block;
        right: 0;
        bottom: 0;
        z-index: 1000;
        width: 30px;
        height: 25px;
        text-indent: -9999px;
        &::before{
            content:"\f054";
            font-family: 'Font Awesome 5 Free';
            font-weight: 900;
            color: #5dbfeb;
            text-indent: 0;
            position: absolute;
            left: 11px;
            top: 6px;
        }
    }
    & figure {
        position: relative;
        & img{
            width: 100%;
            height: 333px;
        }   
    }
    & figcaption{
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        padding: 20px;
        box-sizing: border-box;
        background: rgba(0,0,0,0.8);
        color: #fff;
        font-size: 18px;
        
        & em {
            display: block;
            font-weight: bold;
            font-size: 28px;
            text-transform: uppercase;
            font-family: 'Abel', sans-serif;
            opacity: 0;
            transition: all 0.84s ease;
            transform: translateX(50px);
        }
        & span{
            display: block;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            opacity: 0;
            transition: all 0.84s 0.2s ease;
            transform: translateX(50px);
        }
    }
    @media only screen and (max-width:${mediaSize.W768}){
        & figcaption{
            padding: 10px;

            & em {
                font-size: 18px;
            }
            & span{
                font-size: 14px;
            }
        }
        & figure {
            & img{
                height: 300px;
            }   
        }
    }

`;
const ImageSlider: React.SFC = () => {
    const settings: Settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:3000,
        
    }
    return (
        <Wrapper>
            <Slider {...settings}>
                <div>
                    <figure>
                        <img src="https://github.com/YuMinGod/react/blob/main/public/asc.PNG?raw=true" alt="image1" />
                        <figcaption>
                            <em>discord_score_bot.py</em>
                            <span>참가자들의 점수 집계를 도와주는 디스코드 전용 봇입니다.</span>
                        </figcaption>
                    </figure>
                </div>
                <div>
                    <figure>
                        <img src="https://github.com/YuMinGod/react/blob/main/public/Bazzi.gif?raw=true" alt="image2" />
                        <figcaption>
                            <em>Simple_Char_Move.py</em>
                            <span>원하는 사진을 방향키로 움직일 수 있는 프로그램입니다.</span>
                        </figcaption>
                    </figure>
                </div>
                <div>
                    
                    <figure>
                        <img src="https://github.com/YuMinGod/react/blob/main/public/keylogger.png?raw=true" alt="image3" /> 
                        <figcaption>
                            <em>Key_logger.py</em>
                            <span>Python을 이용한 Keylogger 프로그램입니다.</span>
                        </figcaption>
                    </figure>
                </div>
            </Slider>
        </Wrapper>
    );
}

export default ImageSlider;