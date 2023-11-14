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
        filter: blur(2px);
    }
    &:nth-child(2):hover img{
        filter: brightness(50%);
    }
    &:nth-child(3):hover img{
        filter: contrast(10%);
    }
    &:nth-child(4):hover img{
        filter: grayscale(100%);
    }
    &:nth-child(5):hover img{
        filter: hue-rotate(120deg);
    }
    &:nth-child(6):hover img{
        filter: invert(100%);
    }
    &:nth-child(7):hover img{
        filter: opacity(10%);
    }
    &:nth-child(8):hover img{
        filter: saturate(10%);
    }
    &:nth-child(9):hover img{
        filter: sepia(120%);
    }
    &:nth-child(10):hover img{
        filter: sepia(120%) hue-rotate(120deg);
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
        src:"https://user-images.githubusercontent.com/41350459/82135447-ef185e00-983d-11ea-9cf9-8233adeba9c1.jpg",
        effect: "blur"
    },
    {
        src:"https://user-images.githubusercontent.com/41350459/82135448-f0e22180-983d-11ea-8c13-e0bd0f1b4275.jpg",
        effect: "brightness"
    },
    {
        src:"https://user-images.githubusercontent.com/41350459/82135451-f2134e80-983d-11ea-8868-6881c81e274c.jpg",
        effect: "contrast"
    },
    {
        src:"https://user-images.githubusercontent.com/41350459/82135453-f2abe500-983d-11ea-9407-2c581f32f4b4.jpg",
        effect: "grayscale"
    },
    {
        src:"https://user-images.githubusercontent.com/41350459/82135455-f475a880-983d-11ea-8b91-15bc962ae352.jpg",
        effect: "hue-rotate"
    },
    {
        src:"https://user-images.githubusercontent.com/41350459/82135456-f50e3f00-983d-11ea-9c8d-7f0c0c03fc06.jpg",
        effect: "invert"
    },
    {
        src:"https://user-images.githubusercontent.com/41350459/82135457-f8092f80-983d-11ea-9c27-8c7669131be2.jpg",
        effect: "opacity"
    },
    {
        src:"https://user-images.githubusercontent.com/41350459/82135458-f93a5c80-983d-11ea-99ce-1cc723ead256.jpg",
        effect: "saturate"
    },
    {
        src:"https://user-images.githubusercontent.com/41350459/82135460-fd667a00-983d-11ea-8e72-923de74945f8.jpg",
        effect: "sepia"
    },
    {
        src:"https://user-images.githubusercontent.com/41350459/82135461-ffc8d400-983d-11ea-9dbd-3dee05c97207.jpg",
        effect: "Mix"
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
