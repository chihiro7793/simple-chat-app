import React from 'react'
import './Conversation-List.css'
import ConversationItem from './Coversation-Item'

function ConversationList(
    {
        convs,
        onConversationItemSelected,
        selectedConversationId,
        searchKey
    }
) {
    const filteredConversationItems =
        convs.filter(c =>
            c.username
                .toLowerCase()
                .includes(searchKey.toLowerCase())
        );
    return (
        <div className='conversation-list' >
            {
                filteredConversationItems.map((conversation, index) => {
                    return (
                        <ConversationItem
                            key={conversation.id}
                            conversation={conversation}
                            isActive={index === +selectedConversationId - 1}
                            conversationItemSelected={onConversationItemSelected}
                        />
                    )
                })
            }
        </div>
    )
}

export default ConversationList;