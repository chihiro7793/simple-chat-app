import Message from './Message';
import './Message-List.css';
// import ChatForm from '../chat-form/Chat-Form'
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
            {/* <ChatForm onMessageSubmit={messageSubmitted} /> */}
        </div>
    );
}

export default MessageList;