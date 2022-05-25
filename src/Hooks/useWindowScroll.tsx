import { useState, useEffect, useCallback } from 'react'

function useWindowScroll() {
    const [windowScroll, setWindowScroll] = useState({
        x: 0,
        y: 0,
        directionX: '',
        directionY: ''
    });
    const handleScroll = useCallback(() => {
        setWindowScroll((prev) => {
            return {
                x: window.scrollX,
                y: window.scrollY,
                directionX: prev.x < window.scrollX ? 'right' : 'left',
                directionY: prev.y < window.scrollY ? 'down' : 'up'
            }
        })
    }, []);
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [handleScroll]);

    return windowScroll;
}

export default useWindowScroll