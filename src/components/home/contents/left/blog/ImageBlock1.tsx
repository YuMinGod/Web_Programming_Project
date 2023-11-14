import React from 'react';
import styled from 'styled-components';
import { SU } from '../../../../../styles/IR';

const Wrapper = styled.div`
    img{
        width: 100%;
    }
    & .img-retina{
        display: none;
    }
    @media only screen and (-webkit-min-device-pixel-ratio: 1.5),
            only screen and (min-device-pixel-ratio: 1.5),
            only screen and (min-resolution: 1.5dppx) {
                .img-retina {display: initial;}
                .img-normal {display: none;}
    }
    
`;


const ImageBlock1: React.SFC = () => {
    return(
        <Wrapper>
            <h5><SU>Image1</SU></h5>
            <figure>
                <img className="img-normal" src="https://github.com/YuMinGod/react/blob/main/public/White%20and%20Black%20Simple%20Web%20Developer%20Business%20Card.png?raw=true" alt="normal_image"/>
            </figure>
        </Wrapper>
    );
}

export default ImageBlock1;