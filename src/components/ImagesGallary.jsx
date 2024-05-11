import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

function ImagesGallery() {
    const [image, setImage] = useState({ img: "", i: 0 });
    const [touchStartX, setTouchStartX] = useState(0);
    const [touchEndX, setTouchEndX] = useState(0); // Define touchEndX state

    const images = [
        "https://picsum.photos/200/300",
        "https://picsum.photos/300/300",
        "https://picsum.photos/1000/900",
        "https://picsum.photos/250/300",
        "https://picsum.photos/2000/3400",
        "https://picsum.photos/2000/3000",
        "https://picsum.photos/1100/1300",
        "https://picsum.photos/1300/1300",
        "https://picsum.photos/250/300",
    ];

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "ArrowLeft") {
                imgAction('prev');
            } else if (e.key === "ArrowRight") {
                imgAction('next');
            }
        };

        const handleTouchStart = (e) => {
            setTouchStartX(e.touches[0].clientX);
        };

        const handleTouchMove = (e) => {
            setTouchEndX(e.touches[0].clientX);
        };

        const handleTouchEnd = () => {
            const touchDiff = touchStartX - touchEndX;
            const threshold = 60; // Set the threshold for scrolling

            if (touchDiff > threshold) {
                imgAction('next');
            } else if (touchDiff < -threshold) {
                imgAction('prev');
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("touchstart", handleTouchStart);
        window.addEventListener("touchmove", handleTouchMove);
        window.addEventListener("touchend", handleTouchEnd);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("touchstart", handleTouchStart);
            window.removeEventListener("touchmove", handleTouchMove);
            window.removeEventListener("touchend", handleTouchEnd);
        };
    }, [image, images, touchStartX, touchEndX]);

    const imgAction = (action) => {
        let i = image.i;
        if (action === 'next') {
            if (image.i == images.length - 1) {
                i = -1
            }
            setImage({ img: images[i + 1], i: i + 1 });
        } else if (action === 'prev') {
            if (image.i == 0) {
                i = images.length;
            }
            setImage({ img: images[i - 1], i: i - 1 });
        }
    };

    function viewImage(img, i) {
        setImage({ img, i });
    }

    return (
        <>
            {image.img &&
                <div className="w-[100%] z-20 after:z-[1] h-screen fixed top-0 left-0 after:bg-black after:h-screen after:w-screen after:absolute after:fixed after:top-0 after:left-0 overflow-hidden">
                    <div className="w-screen h-screen fixed z-50 flex justify-center items-center">
                        <button onClick={() => setImage({ img: "", i: 0 })} className="absolute top-20 right-3 bg-orange-500 text-white p-1 rounded-full ml-5 w-8 h-8">x</button>
                        <button onClick={() => imgAction('prev')} className="bg-orange-500 text-white p-1 rounded-md  w-10 h-10 rounded-full"><FontAwesomeIcon icon={faArrowLeft} /></button>
                        <div className="w-[70%] max-w-[1000px] flex justify-center">
                            <img src={image.img} alt="" className="w-auto max-w-[90%] md:h-[70vh] " />
                        </div>
                        <button onClick={() => imgAction('next')} className="bg-orange-500 text-white p-1 rounded-md   w-10 h-10 rounded-full"><FontAwesomeIcon icon={faArrowRight} /></button>
                    </div>
                </div>
            }
            <div className="p-8">
                <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
                    <Masonry gutter="20px">
                        {images.map((image, i) => (
                            <img
                                key={i}
                                src={image}
                                style={{ width: "100%", display: "block", cursor: "pointer" }}
                                alt=""
                                onClick={() => viewImage(image, i)}
                            />
                        ))}
                    </Masonry>
                </ResponsiveMasonry>
            </div>
        </>
    );
}

export default ImagesGallery;
