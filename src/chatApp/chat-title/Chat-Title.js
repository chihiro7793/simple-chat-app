import React from 'react';
import './Chat-Title.css';

const ChatTitle = ({ title }) => {
    return (
        <div className="chat-title">
            <span>{title}</span>
        </div>
    );
}

export default ChatTitle;