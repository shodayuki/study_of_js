import * as React from "react";
import {Modal, ModalBody} from "react-bootstrap";
import './ImageModal.css';

const ImageModal = (props) => {
    return (
        <Modal
            {...props}
            centered
        >
            <ModalBody>
                <img className="ImageSize" src={props.image.urls.regular} alt={props.image.description} />
            </ModalBody>
        </Modal>
    );
};

export default ImageModal;