import React from 'react';
import './Message-List.css';
import Message from './Message'

function MessageList({ messages }) {
    return (
        <div className="chat-message-list">
            {
                messages.map((message, index) => {
                    return (
                        <Message key={index} message={message} />
                    )
                })
            }
        </div>
    );
}

export default MessageList;