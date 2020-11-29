import ConversationList from '../chat-conversations/Conversation-List';
import ChatNav from '../chat-nav/Chat-Nav';
import React from 'react';
import './Side-Menu.css';


export default function SideMenu({
    onConversationItemSelected,
    handleConversationMenu,
    selectedConversation,
    toggleConversations,
    searchKey,
    convs
}) {


    return (
        <div className='side-menu'>
            <ChatNav
                handleConversationMenu={handleConversationMenu}
            />
            <div
                className='conversation-wrapper'>
                <ConversationList
                    convs={convs}
                    searchKey={searchKey}
                    selectedConversation={selectedConversation}
                    onConversationItemSelected={onConversationItemSelected}
                    toggleConversations={toggleConversations}
                />

            </div>
        </div>
    )
}
