import React from "react";
import { createPortal } from "react-dom";

import Image from "next/image";

interface ImageModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ImageModal = ({isOpen, onClose,  ... props}:ImageModalProps,) => {
    const modalStyles = "fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50";
    const contentStyles = "bg-white rounded-lg p-4 w-1/3 grid grid-cols-3 gap-4";

    const images:any = [
        { id: 1, src: "https://source.unsplash.com/random/1", alt: "Image 1" },
        { id: 2, src: "https://source.unsplash.com/random/2", alt: "Image 2" },
        { id: 3, src: "https://source.unsplash.com/random/3", alt: "Image 3" },
        { id: 4, src: "https://source.unsplash.com/random/4", alt: "Image 4" },
        { id: 5, src: "https://source.unsplash.com/random/5", alt: "Image 5" },
        { id: 6, src: "https://source.unsplash.com/random/6", alt: "Image 6" },
        { id: 7, src: "https://source.unsplash.com/random/7", alt: "Image 7" },
        { id: 8, src: "https://source.unsplash.com/random/8", alt: "Image 8" },
        { id: 9, src: "https://source.unsplash.com/random/9", alt: "Image 9" },
        { id: 10, src: "https://source.unsplash.com/random/10", alt: "Image 10" }
      ];


    // if (!isOpen) {
    //     return null;
    // }

    const handleImageClick = (image:any) => {
        console.log(image.target.src);
    };

    return isOpen && createPortal(
        <div className={modalStyles} onClick={onClose}>
            <div className={contentStyles} onClick={(e) => e.stopPropagation()}>
                {images.map((image:any, key:any) => (
                    <Image key={key} onClick={handleImageClick} src={image?.src} width={100} height={100} alt={image?.alt} className="w-full mb-4 cursor-pointer" />
                ))}
            </div>
        </div>,
        document.body
    );
};

export default ImageModal;
