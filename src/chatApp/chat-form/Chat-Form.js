import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import './Chat-Form.css';

function ChatForm({ onMessageSubmit }) {

    const isMessageEmpty = (textMessage) => {
        return adjustTextMessage(textMessage).length === 0;
    }

    const adjustTextMessage = (textMessage) => {
        return textMessage.trim();
    };

    const [text, setText] = useState('');
    const disableButton = isMessageEmpty(text);
    console.log(disableButton);

    function handleSubmit(e) {
        e.preventDefault();
        if (!isMessageEmpty(text)) {
            onMessageSubmit(text);
            setText('');
        }
    }
    function handleKeyDown(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            if (!isMessageEmpty(text)) {
                onMessageSubmit(text);
                setText('');
            }
        }
    }
    return (
        <form className="chat-form" onKeyDown={handleKeyDown}>
            <input
                type="text"
                value={text}
                placeholder="Type a message"
                onChange={(e) => setText(e.target.value)}
            />
            <FontAwesomeIcon
                className={disableButton ? 'fontawesome-icon disabled' : 'fontawesome-icon'}
                icon={faPaperPlane}
                onClick={handleSubmit} />
        </form>
    );
}

export default ChatForm;