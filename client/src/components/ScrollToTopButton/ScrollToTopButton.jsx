import React, { useState, useEffect } from 'react';
import "./ScrollToTopButton.css"; // For the CSS styles

export default function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Event listener for scroll event
        const handleScroll = () => {
            if (window.scrollY > 200) {  // Show button after scrolling 200px
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        // Attach scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup event listener on unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Function to scroll back to the top smoothly
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',  // Smooth scrolling effect
        });
    };

    return (
        isVisible && (
            <button
                className="scroll-to-top"
                onClick={scrollToTop}
            >
                ↑
            </button>
        )
    );
};


