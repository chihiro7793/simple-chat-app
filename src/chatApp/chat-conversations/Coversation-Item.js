import React from 'react';
import './Conversation-Item.css';

function CoversationItem(
    {
        conversationItemSelected,
        conversation,
        isActive,
    }
) {

    function handleClick() {
        conversationItemSelected(conversation.id);
        // caughtAllMessages(conversation.id)
    }
    return (
        <div
            className={isActive ? 'conversation active' : 'conversation'}
            onClick={handleClick}
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

// const mapDispatchToProps = (dispatch) => {
//     return {
//         caughtAllMessages: id => dispatch(caughtAllMessages(id))

//     }
// }
// export default connect(mapDispatchToProps)(CoversationItem);

export default CoversationItem;