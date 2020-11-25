import React from 'react';
import './Init-Window.css';

const InitWindow = () => {
    return (
        <div className="init-window-layout">
            <div className="init-window-content">
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

export default InitWindow;