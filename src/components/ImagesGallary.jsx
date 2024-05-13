import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

function ImagesGallery() {
    const [image, setImage] = useState({ img: "", i: -1 });
    const [touchStartX, setTouchStartX] = useState(0);
    const [touchEndX, setTouchEndX] = useState(0); // Define touchEndX state

    const images = [
        "https://res.cloudinary.com/dfwau45qj/image/upload/v1715608018/WhatsApp_Image_2024-05-11_at_2.44.23_PM_jcieng.jpg",
        "https://res.cloudinary.com/dfwau45qj/image/upload/v1715608013/WhatsApp_Image_2024-05-11_at_2.44.23_PM_1_kara9i.jpg",
        "https://res.cloudinary.com/dfwau45qj/image/upload/v1715607994/WhatsApp_Image_2024-05-11_at_2.44.22_PM_1_a1vfie.jpg",

        "https://res.cloudinary.com/dfwau45qj/image/upload/v1715607986/WhatsApp_Image_2024-05-11_at_2.44.22_PM_frbhor.jpg",
        "https://res.cloudinary.com/dfwau45qj/image/upload/v1715607961/WhatsApp_Image_2024-05-11_at_2.44.21_PM_hxrnkg.jpg",
        "https://res.cloudinary.com/dfwau45qj/image/upload/v1715607958/WhatsApp_Image_2024-05-11_at_2.44.20_PM_1_mofbsn.jpg",

        "https://res.cloudinary.com/dfwau45qj/image/upload/v1715607953/WhatsApp_Image_2024-05-11_at_2.44.20_PM_mygsaa.jpg",
        "https://res.cloudinary.com/dfwau45qj/image/upload/v1715607923/WhatsApp_Image_2024-05-11_at_2.44.19_PM_z0d7nm.jpg",
        "https://res.cloudinary.com/dfwau45qj/image/upload/v1715607892/WhatsApp_Image_2024-05-11_at_2.44.17_PM_sun7am.jpg",

        "https://res.cloudinary.com/dfwau45qj/image/upload/v1715607866/WhatsApp_Image_2024-05-11_at_2.44.18_PM_vwcl2h.jpg",
        "https://res.cloudinary.com/dfwau45qj/image/upload/v1715607843/WhatsApp_Image_2024-05-11_at_2.44.15_PM_ksijdo.jpg",
        "https://res.cloudinary.com/dfwau45qj/image/upload/v1715607837/WhatsApp_Image_2024-05-11_at_2.44.17_PM_1_vns2lr.jpg",
        "https://res.cloudinary.com/dfwau45qj/image/upload/v1715607803/WhatsApp_Image_2024-05-11_at_2.43.43_PM_l5uogz.jpg",

        "https://res.cloudinary.com/dfwau45qj/image/upload/v1715607772/WhatsApp_Image_2024-05-11_at_2.44.14_PM_jpzsma.jpg",
        "https://res.cloudinary.com/dfwau45qj/image/upload/v1715607750/WhatsApp_Image_2024-05-11_at_2.44.14_PM_1_exv2rh.jpg",
        "https://res.cloudinary.com/dfwau45qj/image/upload/v1715607739/WhatsApp_Image_2024-05-11_at_2.44.12_PM_jw2cka.jpg",

        "https://res.cloudinary.com/dfwau45qj/image/upload/v1715607720/WhatsApp_Image_2024-05-11_at_2.44.10_PM_dr1jfo.jpg",
        "https://res.cloudinary.com/dfwau45qj/image/upload/v1715607699/WhatsApp_Image_2024-05-11_at_2.44.08_PM_kssxzb.jpg",
        "https://res.cloudinary.com/dfwau45qj/image/upload/v1715607699/WhatsApp_Image_2024-05-11_at_2.44.09_PM_wzowox.jpg",

        "https://res.cloudinary.com/dfwau45qj/image/upload/v1715607699/WhatsApp_Image_2024-05-11_at_2.44.09_PM_wzowox.jpg",
        "https://res.cloudinary.com/dfwau45qj/image/upload/v1715607612/WhatsApp_Image_2024-05-11_at_2.44.01_PM_mx2vuu.jpg",
        "https://res.cloudinary.com/dfwau45qj/image/upload/v1715607587/WhatsApp_Image_2024-05-11_at_2.43.49_PM_bfxbng.jpg",

        "https://res.cloudinary.com/dfwau45qj/image/upload/v1715607584/WhatsApp_Image_2024-05-11_at_2.43.45_PM_2_wkjvl3.jpg",
        "https://res.cloudinary.com/dfwau45qj/image/upload/v1715607573/WhatsApp_Image_2024-05-11_at_2.44.04_PM_zfbo6k.jpg",
        "https://res.cloudinary.com/dfwau45qj/image/upload/v1715607556/WhatsApp_Image_2024-05-11_at_2.43.57_PM_vxp8to.jpg",

        "https://res.cloudinary.com/dfwau45qj/image/upload/v1715607524/WhatsApp_Image_2024-05-11_at_2.44.05_PM_uyswj1.jpg",
        "https://res.cloudinary.com/dfwau45qj/image/upload/v1715607587/WhatsApp_Image_2024-05-11_at_2.43.49_PM_bfxbng.jpg",
        "https://res.cloudinary.com/dfwau45qj/image/upload/v1715607584/WhatsApp_Image_2024-05-11_at_2.43.45_PM_2_wkjvl3.jpg",

        "https://res.cloudinary.com/dfwau45qj/image/upload/v1715607573/WhatsApp_Image_2024-05-11_at_2.44.04_PM_zfbo6k.jpg",
        "https://res.cloudinary.com/dfwau45qj/image/upload/v1715607556/WhatsApp_Image_2024-05-11_at_2.43.57_PM_vxp8to.jpg",
        "https://res.cloudinary.com/dfwau45qj/image/upload/v1715607479/WhatsApp_Image_2024-05-11_at_2.43.46_PM_1_znmm4f.jpg",
        "https://res.cloudinary.com/dfwau45qj/image/upload/v1715607479/WhatsApp_Image_2024-05-11_at_2.43.46_PM_1_znmm4f.jpg",
        "https://res.cloudinary.com/dfwau45qj/image/upload/v1715607457/WhatsApp_Image_2024-05-11_at_2.43.42_PM_jc2nls.jpg",
        "https://res.cloudinary.com/dfwau45qj/image/upload/v1715607458/WhatsApp_Image_2024-05-11_at_2.43.44_PM_1_spirid.jpg",
        "https://res.cloudinary.com/dfwau45qj/image/upload/v1715607462/WhatsApp_Image_2024-05-11_at_2.43.52_PM_xovwjh.jpg",
        "https://res.cloudinary.com/dfwau45qj/image/upload/v1715607457/WhatsApp_Image_2024-05-11_at_2.43.42_PM_jc2nls.jpg",
        "https://res.cloudinary.com/dfwau45qj/image/upload/v1715607441/WhatsApp_Image_2024-05-11_at_2.43.41_PM_rxmfgq.jpg",
        "https://res.cloudinary.com/dfwau45qj/image/upload/v1715607341/WhatsApp_Image_2024-03-30_at_4.13.20_PM_m2hmjg.jpg"
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

        if (image.i > -1) {
            window.addEventListener("keydown", handleKeyDown);
            window.addEventListener("touchstart", handleTouchStart);
            window.addEventListener("touchmove", handleTouchMove);
            window.addEventListener("touchend", handleTouchEnd);
        }


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
                        <button onClick={() => setImage({ img: "", i: -1 })} className="absolute top-20 right-3 bg-orange-500 text-white p-1 rounded-full ml-5 w-8 h-8">x</button>
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
