import './Loading-Window.css';
import React from 'react';

const LoadingWindow = () => {
    return (
        <div className="loading-window-layout">
            <div className="loading-window-content">
                <h2>Messenger's Loading ... </h2>
                <div className="lds-roller">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    );
}

export default LoadingWindow;