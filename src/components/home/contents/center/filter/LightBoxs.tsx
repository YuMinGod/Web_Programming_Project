import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

interface Props {
    index: number;
    setVisible: (visible:boolean) => void;
}
const images = ["https://user-images.githubusercontent.com/41350459/82135983-d743d880-9843-11ea-9cfc-8708547aa9f0.jpg",
    "https://user-images.githubusercontent.com/41350459/82135984-d8750580-9843-11ea-831b-1aafce6dc448.jpg",
    "https://user-images.githubusercontent.com/41350459/82135987-dad75f80-9843-11ea-9ebe-515ca943e61c.jpg",
    "https://user-images.githubusercontent.com/41350459/82135988-dc088c80-9843-11ea-8088-8d94a2e2403c.jpg",
    "https://user-images.githubusercontent.com/41350459/82135991-ddd25000-9843-11ea-98eb-5f32bbc121c0.jpg",
    "https://user-images.githubusercontent.com/41350459/82135992-df037d00-9843-11ea-9d9b-6f7a2cde3a4e.jpg",
    "https://user-images.githubusercontent.com/41350459/82135994-e034aa00-9843-11ea-91bc-94ddfec6dd6e.jpg",
    "https://user-images.githubusercontent.com/41350459/82135996-e165d700-9843-11ea-8b48-6b142bf8bfe6.jpg",
    "https://user-images.githubusercontent.com/41350459/82135999-e460c780-9843-11ea-8ce5-bb8e4f8d50bf.jpg",
    "https://user-images.githubusercontent.com/41350459/82136000-e591f480-9843-11ea-864c-e294231ff5c0.jpg",
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