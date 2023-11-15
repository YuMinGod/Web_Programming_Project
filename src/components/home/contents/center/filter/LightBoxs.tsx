import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

interface Props {
    index: number;
    setVisible: (visible:boolean) => void;
}
const images = ["https://github.com/YuMinGod/react/blob/main/123.PNG?raw=true",
    "",
    "",
    "",
    "",
    "",
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