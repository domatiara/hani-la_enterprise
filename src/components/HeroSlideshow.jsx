import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import Video from '../assets/videos/hero-videoframe.png'

const heroImages = [
    'https://i.pinimg.com/736x/e5/71/26/e57126e2be3020c316b559c5f87e3eed.jpg',
    'https://i.pinimg.com/736x/50/8d/98/508d9896e1c74ba6d0d6ff1aec2bb67a.jpg',
    'https://i.pinimg.com/736x/9d/44/75/9d4475b85e8945a1706036343b697b7e.jpg',
    'https://i.pinimg.com/736x/a7/e7/7f/a7e77f27cf57416428f44a51063a8c62.jpg',
    'https://i.pinimg.com/1200x/43/2f/b9/432fb9c3ff458620c0f93a94c2e2daec.jpg',
];

export default function HeroSlideshow() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroImages.length);
        }, 5000); // 5 seconds per slide

        return () => clearInterval(slideInterval);
    }, []);

    const handleDotClick = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div className="relative w-full h-screen overflow-hidden my-25">
            {heroImages.map((image, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out bg-opacity-60 ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                    style={{ backgroundImage: `url(${image})` }}
                >
                    
                </div>
            ))}

            {/* Overlay Content */}
            {/* <div className="absolute inset-0 flex flex-col justify-center items-start px-6 sm:px-12 md:px-30 mt-20 sm:mt-8 md:mt-10 text-black z-20">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
                    <span className="font-extralight">Welcome to </span>
                    <br />
                    <span className="font-extrabold">HANI-LAH ENTERPRISE</span>
                </h1>
                <Link to="/login">
                    <button className="rounded px-12 py-3 mt-8 text-sm font-bold bg-[#D47125] text-white hover:bg-[#49372a] transition duration-300 ">
                        GET STARTED
                    </button>
                </Link>
            </div> */}

            {/* Pagination Dots */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
                {heroImages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handleDotClick(index)}
                        className={`w-3 h-3 rounded-full transition-colors duration-300 ${index === currentSlide ? 'bg-white' : 'bg-white/40'
                            }`}
                    />
                ))}
            </div>

        </div>
    );
}



// Assuming your video file is in the 'public' folder or imported if in 'src'
// Example: import heroVideo from '../assets/hero-video.mp4';
// Then use heroVideo in the src. For simplicity, we'll assume it's in public.

// const heroMedia = [
    
//     {
//         type: 'video',
//         // IMPORTANT: Replace '/your-video.mp4' with the actual path to your video file.
//         // If it's in your public folder, it's '/video-name.mp4'.
//         // If it's in src/assets, you'd import it: import video from '../assets/my-video.mp4';
//         src: {Video}, // Example: Make sure this path is correct for your video
//         alt: 'People crafting goods', // Alt text for video (fallback for accessibility)
//     },
//     {
//         type: 'image',
//         src: 'https://i.pinimg.com/736x/96/47/f1/9647f1c88597fcd222495af2c15113e4.jpg',
//         alt: 'Craftsman working on wood', // Add alt text for accessibility
//     },
//     {
//         type: 'image',
//         src: 'https://i.pinimg.com/736x/a7/e7/7f/a7e77f27cf57416428f44a51063a8c62.jpg',
//         alt: 'Basket weaving',
//     },
//     {
//         type: 'image',
//         src: 'https://i.pinimg.com/736x/34/91/db/3491dbf0727c7c03f41f71abb738aa1e.jpg',
//         alt: 'Pottery being crafted',
//     },
//     {
//         type: 'image',
//         src: 'https://i.pinimg.com/736x/4a/c5/63/4ac56304f6005f63dc737b0615e6a533.jpg',
//         alt: 'Textile weaving',
//     },
//     {
//         type: 'image',
//         src: 'https://i.pinimg.com/736x/55/c7/d4/55c7d4dc5300ba16489ecbefef671dc3.jpg',
//         alt: 'African traditional art',
//     },
// ];

// export default function HeroSlideshow() {
//     const [currentSlide, setCurrentSlide] = useState(0);

//     useEffect(() => {
//         const slideInterval = setInterval(() => {
//             setCurrentSlide((prev) => (prev + 1) % heroMedia.length);
//         }, 5000); // 5 seconds per slide

//         return () => clearInterval(slideInterval);
//     }, []);

//     const handleDotClick = (index) => {
//         setCurrentSlide(index);
//     };

//     return (
//         <div className="relative w-full h-screen overflow-hidden"> {/* Removed my-25 as it's not a standard Tailwind class */}
//             {heroMedia.map((media, index) => (
//                 <div
//                     key={index}
//                     className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out 
//                                 ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}
//                             `}
//                 >
//                     {media.type === 'image' ? (
//                         <img
//                             src={media.src}
//                             alt={media.alt}
//                             className="w-full h-full object-cover bg-center" // Tailwind classes for image fitting
//                         />
//                     ) : (
//                         <video
//                             src={media.src}
//                             className="w-full h-full object-cover" // Tailwind classes for video fitting
//                             autoPlay
//                             loop
//                             muted
//                             playsInline // Important for mobile autoplay
//                             aria-label={media.alt} // Add aria-label for video accessibility
//                         >
//                             Your browser does not support the video tag.
//                         </video>
//                     )}
//                     {/* Overlay for text readability - apply only to the media element, not the entire slide div */}
//                     <div className="absolute inset-0 bg-black bg-opacity-40"></div> {/* Adjust opacity as needed */}
//                 </div>
//             ))}

//             {/* Overlay Content */}
//             <div className="absolute inset-0 flex flex-col justify-center items-start px-6 sm:px-12 md:px-24 text-white z-20">
//                 <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
//                     <span className="font-extralight">Welcome to </span>
//                     <br />
//                     <span className="font-extrabold">ADWUMACraft</span>
//                 </h1>
//                 <Link to="/login">
//                     <button className="rounded px-12 py-3 mt-16 text-sm font-bold bg-red-500 text-white hover:bg-red-800 transition duration-300 animate-bounce">
//                         GET STARTED
//                     </button>
//                 </Link>
//             </div>

//             {/* Pagination Dots */}
//             <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
//                 {heroMedia.map((_, index) => (
//                     <button
//                         key={index}
//                         onClick={() => handleDotClick(index)}
//                         className={`w-3 h-3 rounded-full transition-colors duration-300 ${index === currentSlide ? 'bg-white' : 'bg-white/40'
//                             }`}
//                         aria-label={`Go to slide ${index + 1}`} // Add aria-label for accessibility
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// }