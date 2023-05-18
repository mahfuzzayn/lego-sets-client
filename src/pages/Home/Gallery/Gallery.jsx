import React from "react";
import "./Gallery.css";

const Gallery = () => {
    const galleryPhotos = [
        "https://i.ibb.co/mt68Pp7/lego-2539844-640.jpg",
        "https://i.ibb.co/5jGZSxP/ezgif-com-webp-to-jpg.jpg",
        "https://i.ibb.co/Gd2Bfq5/860-Lego-swallowing.png",
        "https://i.ibb.co/j60Ss5p/despaired-2261021-1280.jpg",
        "https://i.ibb.co/cNRGNPF/fbi-3026206-640.jpg",
        "https://i.ibb.co/j49DFGb/360-F-356424856-yc-ZSM3c-KXl-G5ntv6-Uo-LJv-V1q-Cw511e-Aq.jpg",
        "https://i.ibb.co/Vx0y5TL/lego-sets-may-2023-1682964669142.png",
        "https://i.ibb.co/ZGNNBs4/125879202-legorussia.jpg",
    ];

    return (
        <div className="gallery mt-[130px] mx-5">
            <div className="hero">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Gallery</h1>
                        <p className="py-6">
                            Welcome to our gallery section, where creativity
                            comes to life! Explore a visual feast of captivating
                            images that showcase the best of what we have to
                            offer.
                        </p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 max-w-[1320px] mx-auto place-items-center">
                {galleryPhotos.map((photo, idx) => (
                    <div key={idx} className="h-[300px] max-w-[300px] rounded-lg">
                        <img
                            src={photo}
                            className="h-[300px] object-cover rounded-lg"
                            alt=""
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
