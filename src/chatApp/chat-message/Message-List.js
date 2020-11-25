import Message from './Message';
import './Message-List.css';
import React, { useEffect, useRef } from 'react';


function MessageList({ messages }) {
    const messageListElement = useRef(null);
    useEffect(() => {
        messageListElement.current.scrollTop = messageListElement.current.scrollHeight;
    })
    return (
        <div ref={messageListElement} className="chat-message-list">
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