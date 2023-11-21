import React, {useState} from 'react';
import styled from 'styled-components';
import LightBoxs from './LightBoxs';
import mediaSize from '../../../../../styles/mediaSize';
const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    overflow: hidden;
`;
const Box = styled.div`
    width: 18%;
    margin: 1%;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    &:hover em{
        bottom: 0;
    }
    &:nth-child(1):hover img{
        filter: brightness(50%);
    }
    &:nth-child(2):hover img{
        filter: brightness(50%);
    }
    &:nth-child(3):hover img{
        filter: brightness(50%);
    }
    &:nth-child(4):hover img{
        filter: brightness(50%);
    }
    &:nth-child(5):hover img{
        filter: brightness(50%);
    }
    

    & img {
        width: 100%;
        display: block;
        
    }
    & em{
        position: absolute;
        left: 0;
        bottom: -30px;
        width: 100%;
        text-align: center;
        background: rgba(0,0,0,0.57);
        color: #fff;
        transition: all 0.3s ease;
        text-transform: capitalize;
    }
    @media only screen and (max-width: ${mediaSize.W1220}){  
        width: 23%;
        &:nth-child(5n){
            display:none;
        }      
    }
    @media only screen and (max-width: ${mediaSize.W1024}){
        width: 31%;
        &:nth-child(5){
            display:block;
        }
    }
    @media only screen and (max-width: ${mediaSize.W600}){
        width: 48%;
        &:nth-child(5n){
            display:none;
        }
    }
`;

const images = [
    {
        src:"https://github.com/YuMinGod/react/blob/main/yt_button.png?raw=true",
        effect: "YT Downloader"
    },
    {
        src:"https://github.com/YuMinGod/react/blob/main/python.png?raw=true",
        effect: "Login Tool"
    },
    {
        src:"",
        effect: "none3"
    },
    {
        src:"",
        effect: "none4"
    },
    {
        src:"",
        effect: "none5"
    },
    
];
const Square: React.FC = () => {
    const [idx, setIdx] = useState(0);
    const [visible, setVisible] = useState(false);
    const renderImages = images.map((image,i) => {
        return(
            <Box key={i}>
                <img src={image.src} alt={`img${i}`} onClick={() => {
                    setIdx(i);
                    setVisible(true);
                }}/>
                <em>{image.effect}</em>
            </Box>
        )
    });
    return(
        <Wrapper>
            {renderImages}
            {visible && <LightBoxs index={idx} setVisible ={setVisible}/>}
        </Wrapper>
    );
}


export default Square;
