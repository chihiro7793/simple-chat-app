import React, { useEffect, useRef } from 'react';
import Message from './Message';
import './Message-List.css';


function MessageList({ selectedConversation, handleDeleteMessage }) {
    const messageListElement = useRef(null);

    useEffect(() => {
        messageListElement.current.scrollTop =
            messageListElement.current.scrollHeight;
    })
    return (
        <div ref={messageListElement}
            className="chat-message-list">
            {
                selectedConversation.messages.map((message, index) => {
                    return (
                        <Message
                            key={index}
                            message={message}
                            handleDeleteMessage={() => handleDeleteMessage(index, selectedConversation)}
                        />
                    )
                })
            }
        </div>
    );
}

export default MessageList;