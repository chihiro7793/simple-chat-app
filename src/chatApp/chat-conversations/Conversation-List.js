import React from 'react'
import './Conversation-List.css'
import ConversationItem from './Coversation-Item'

function ConversationList(
    {
        convs,
        onConversationItemSelected,
        selectedConversation,
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
                    const conversationIsActive = selectedConversation && conversation.id === selectedConversation.id;

                    return (
                        <ConversationItem
                            key={conversation.id}
                            conversation={conversation}
                            isActive={conversationIsActive}
                            conversationItemSelected={onConversationItemSelected}
                        />
                    )
                })
            }
        </div>
    )
}

export default ConversationList;