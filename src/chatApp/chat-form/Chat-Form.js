import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import './Chat-Form.css';

function ChatForm({ onMessageSubmit }) {
    const [text, setText] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        onMessageSubmit(text)
        setText('');
    }
    return (
        <form className="chat-form">
            <input
                type="text"
                value={text}
                placeholder="Type a message"
                onChange={(e) => setText(e.target.value)}
            />
            <FontAwesomeIcon
                className='fontawesome-icon'
                icon={faPaperPlane}
                onClick={handleSubmit} />
        </form>
    );
}

export default ChatForm;