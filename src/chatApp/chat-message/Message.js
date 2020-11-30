import { faChevronDown, faStar, faCheckDouble } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useComponentVisible from '../../functions/customhooks';
import MessageController from './Message-Controller';
import React, { useState } from 'react';
import './Message.css';

const Message =
    ({
        handleDeleteMessage,
        message,
        unread
    }) => {

        const { ref,
            isComponentVisible,
            setIsComponentVisible
        } = useComponentVisible(false);

        const [isStarred, setIsStarred] = useState(false);

        function handleDeleteClick() {
            setIsComponentVisible(false);
            handleDeleteMessage();
        }
        function handleClickStar() {
            setIsComponentVisible(false);
            setIsStarred(!isStarred)
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
                                    clickDelete={handleDeleteClick}
                                    clickStar={handleClickStar}
                                    isStarred={isStarred}
                                />
                            }
                        </div>
                        <div>
                            {message.messageText}
                        </div>
                        <div className="message-info">
                            <FontAwesomeIcon
                                icon={faStar}
                                className={isStarred ? "message-star show" : "message-star"}
                            />
                            {!unread &&
                                <FontAwesomeIcon
                                    icon={faCheckDouble}
                                    className="message-checked"
                                />
                            }
                        </div>
                    </div>
                    <div className="message-time">{message.createdAt}</div>
                </div>
            </div>
        )
    }

export default Message;