import React, { useCallback, useEffect } from 'react';
import './Loader.scss';

export const Loader = () => {

    useEffect(useCallback(() => {
        const dots = document.querySelector('.dots')

        function animate(element: HTMLElement, className: string) {
            element.classList.add(className);
            setTimeout(() => {
                element.classList.remove(className);
                setTimeout(() => {
                    animate(element, className);
                }, 500);
            }, 2500);
        }

        animate(dots as HTMLElement, "dots--animate")
    }, []), [])
    return (
        <div className="loader">
            <h1 className="loader__header">Loading</h1>
            <div className="dots">
                <span className="dot z"></span>
                <span className="dot f"></span>
                <span className="dot s"></span>
                <span className="dot t"></span>
                <span className="dot l"></span>
            </div>

        </div>
    );
};
