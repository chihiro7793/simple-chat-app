import React from 'react'
import './Message.css'

export default function Message({ message }) {


    return (
        <div className={message.self ? "message-row you-message" : "message-row other-message"}>
            <div className="message-content">
                <div className="message-text">{message.messageText}</div>
                <div className="message-time">{message.createdAt}</div>
            </div>
        </div>
    )
}
