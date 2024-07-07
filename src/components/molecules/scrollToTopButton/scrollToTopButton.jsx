import { useEffect, useState } from 'react';

import Arrow from '@assets/icons/arrow.svg?react';

import styles from './scrollToTopButton.module.scss';

const ScrollToTopButton = ({ className, ...props }) => {
    const [isVisible, setIsVisible] = useState(false);
    const visibleClassName = isVisible ? styles.visible : '';
    const combinedClasses = `${styles.root} ${visibleClassName} ${className || ''}`;

    const scrollTo = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 600) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <button className={combinedClasses} onClick={scrollTo} {...props}>
            <Arrow />
        </button>
    );
};

export default ScrollToTopButton;
