import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

interface Props {
    index: number;
    setVisible: (visible:boolean) => void;
}
const images = ["https://github.com/YuMinGod/react/blob/main/123.PNG?raw=true",
                "https://user-images.githubusercontent.com/125354965/284475054-5dbfcae9-c512-4f68-9d21-c9d1c43e8c51.png",
                "https://github.com/YuMinGod/images_repos/blob/main/python%20editor.gif?raw=true",
                "https://github.com/YuMinGod/images_repos/blob/main/2419BE505626FF412E.png?raw=true",
                "https://github.com/YuMinGod/Dice_Game/blob/main/images/Dice_Game.gif?raw=true"
];
const LightBoxs: React.FC<Props> = ({ index, setVisible }) => {
    const [idx, setIdx] = useState(index);

    return (
        <div>
            <Lightbox
                mainSrc={images[idx]}
                nextSrc={images[(idx + 1) % images.length]}
                prevSrc={images[(idx + images.length - 1) % images.length]}
                onCloseRequest={() => setVisible(false)}
                onMovePrevRequest={() =>
                    setIdx((idx + images.length - 1) % images.length)
                }
                onMoveNextRequest={() =>
                    setIdx((idx +  1) % images.length)
                }
            />
        </div>
    )
}

export default LightBoxs;