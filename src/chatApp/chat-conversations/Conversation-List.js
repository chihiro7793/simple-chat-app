import React from 'react'
import './Conversation-List.css'
import ConversationItem from './Coversation-Item'

function ConversationList(
    {
        convs,
        onConversationItemSelected,
        selectedConversationId
    }
) {
    return (
        <div className='conversation-list' >
            {
                convs.map((conversation, index) => {
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