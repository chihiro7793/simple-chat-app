import ConversationItem from './Coversation-Item';
import './Conversation-List.css';
import React from 'react';

function ConversationList(
    {
        onConversationItemSelected,
        selectedConversation,
        toggleConversations,
        searchKey,
        convs
    }
) {
    const filteredConversationItems =
        convs.filter(c =>
            c.username
                .toLowerCase()
                .includes(searchKey.toLowerCase())
        );
    return (
        <div
            className=
            {!toggleConversations ?
                'conversation-list' :
                'conversation-list hidden'} >
            {
                filteredConversationItems.map(conversation => {
                    const conversationIsActive =
                        selectedConversation && conversation.id ===
                        selectedConversation.id;
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