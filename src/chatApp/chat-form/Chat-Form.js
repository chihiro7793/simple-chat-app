import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import './Chat-Form.css';

function ChatForm() {
    return (
        <div className="chat-form">
            <input type="text" placeholder="type a message" />
            <FontAwesomeIcon className='fontawesome-icon' icon={faPaperPlane} />
        </div>
    );
}

export default ChatForm;