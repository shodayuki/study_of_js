import React from "react";

class ImageCard = (props) => {
    const [spans, setSpans] = React.useState(0);
    const imageRef = React.useRef(null);

    const calculateSpans = () => {
        const height = imageRef.current.clientHeight;
        setSpans(Math.ceil(height / 10));
    };

    React.useEffect(() => {
        imageRef.current.addEventListener('load', calculateSpans);
    });

    const { description, urls } = props.image;

    return (
        <div style={{ gridRowEnd: `span ${spans}` }}>
            <img ref={imageRef} src={urls.regular} alt={description} />
        </div>
    );
};

export default ImageCard;