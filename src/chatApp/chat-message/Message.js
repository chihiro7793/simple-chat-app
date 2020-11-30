import React from 'react';
import './Message.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import MessageController from './Message-Controller';
import useComponentVisible from '../../functions/customhooks'

export default function Message({ message, handleDeleteMessage }) {

    const { ref,
        isComponentVisible,
        setIsComponentVisible
    } = useComponentVisible(false);

    function handleDeleteClick() {
        setIsComponentVisible(false);
        handleDeleteMessage();
    }

    return (
        <div
            className={message.self ?
                "message-row self-message" :
                "message-row other-message"}
        >
            <div className="message-content">

                <div className="message-text">
                    <div className="dropdown">
                        <FontAwesomeIcon
                            icon={faChevronDown}
                            className="more-options"
                            onClick={() => setIsComponentVisible(true)}
                        />

                        {
                            isComponentVisible &&
                            <MessageController
                                ref={ref}
                                className={!isComponentVisible ?
                                    "dropdown-content" :
                                    "dropdown-content show"}
                                click={handleDeleteClick}
                            />
                        }
                    </div>
                    <div>
                        {message.messageText}
                    </div>
                </div>
                <div className="message-time">{message.createdAt}</div>
            </div>
        </div>
    )
}
