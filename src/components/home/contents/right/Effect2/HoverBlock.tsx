import React from 'react';
import styled from 'styled-components';
import ImageStyle from '../ImageStyle';

const Front = styled(ImageStyle)`
    transform-style: preserve-3d;
    transform: rotateY(0deg);
    transition: all 0.5s ease-in-out;
    backface-visibility: hidden;
    & figcaption {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) translateZ(100px);
        display: block;
        text-align: center;
    }
`;
const Back = styled(ImageStyle)`
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transform-style: preserve-3d;
    transform: rotateY(-180deg);
    transition: all 0.5s ease-in-out;
    backface-visibility: hidden;
    
    & figcaption {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) translateZ(100px);
        display: block;
        text-align: center;
    }
`;

const Wrapper = styled.div`
    position: relative;
    perspective: 600px;
    display: block;
    &:hover ${Front}{
        transform: rotateY(180deg);
    }
    &:hover ${Back}{
        transform: rotateY(0deg);
        z-index: 1;
    }
    figcaption {
        width: 60%;
        color: #fff;
        font-size: 25px;
        font-family: "Abel", sans-serif;
        font-weight: bold;
        background: rgba(0,0,0,0.6);
        padding: 3px 10px; 
    }
`;


const HoverBlock:React.SFC = () => {
    return(
        <Wrapper>
            <Front>
                <img src="https://github.com/YuMinGod/react/blob/main/public/Major%20(1).png?raw=true" alt="image2"/>
                <figcaption>Major</figcaption>
            </Front>
            <Back>
                <img src="https://github.com/YuMinGod/react/blob/main/public/Non%20-%20Major.png?raw=true" alt="image2"/>
                <figcaption>Non-Major</figcaption>
            </Back>
        </Wrapper>
    );
}

export default HoverBlock;