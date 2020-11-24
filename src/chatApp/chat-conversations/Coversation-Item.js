import React from 'react';
import './Conversation-Item.css'

function CoversationItem(
    {
        conversation,
        isActive,
        conversationItemSelected
    }
) {
    return (
        <div
            className={isActive ? 'conversation active' : 'conversation'}
            onClick={() => {
                return conversationItemSelected(conversation.id);
            }}
        >
            <div className='conversation-avatar'>
                <img src={conversation.imageUrl.default} alt={conversation.imageAlt} />
            </div>
            <div className='title-text'>{conversation.username}</div>
            <div className='conversation-message'>{conversation.messages[conversation.messages.length - 1].text}</div>
            <div className='conversation-time'>{conversation.messages[conversation.messages.length - 1].createdAt}</div>
            {
                !!conversation.unread &&
                <div className='conversation-info'>{conversation.unread}</div>
            }
        </div>
    )
}
export default CoversationItem;