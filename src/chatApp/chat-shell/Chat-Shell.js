import React from 'react';
import ChatNav from '../chat-nav/Chat-Nav';
import ConversationList from '../chat-conversations/Conversation-List';
import ChatTitle from '../chat-title/Chat-Title';
import MessageList from '../chat-message/Message-List';
import ChatForm from '../chat-form/Chat-Form';

import './Chat-Shell.css';

function ChatShell() {
    return (
        <div className="chat-container">
            <ChatNav />
            <ChatTitle />
            <ConversationList />
            <MessageList />
            <ChatForm />
        </div>
    );
}

export default ChatShell;