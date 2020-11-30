import React from 'react';
import './Conversation-Item.css';

function CoversationItem
    ({
        conversationItemSelected,
        conversation,
        isActive,
    }) {

    function handleClick() {
        conversationItemSelected(conversation.id);
    }

    const isConversationMessageEmpty = !!conversation.messages[conversation.messages.length - 1] === false;
    return (
        <div
            className={isActive ? 'conversation active' : 'conversation'}
            onClick={handleClick}
        >
            <div className='conversation-avatar'>
                <img src={conversation.imageUrl.default} alt={conversation.imageAlt} />
            </div>
            <div className='title-text'>{conversation.username}</div>
            <div className='conversation-message'>
                {isConversationMessageEmpty ?
                    '' :
                    conversation.messages[conversation.messages.length - 1]
                        .messageText
                }
            </div>
            <div className='conversation-time'>
                {isConversationMessageEmpty ?
                    '' :
                    conversation.messages[conversation.messages.length - 1]
                        .createdAt
                }
            </div>
            {
                !!conversation.unread &&
                <div className='conversation-info'>{conversation.unread}</div>
            }
        </div>
    )
}

export default CoversationItem;