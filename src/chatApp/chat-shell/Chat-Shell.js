import { conversationChanged, messageSubmitted } from '../../actions/index';
import ConversationList from '../chat-conversations/Conversation-List';
import MessageList from '../chat-message/Message-List';
import ChatTitle from '../chat-title/Chat-Title';
import ChatForm from '../chat-form/Chat-Form';
import ChatNav from '../chat-nav/Chat-Nav';
import { connect } from 'react-redux';
import React from 'react';
import './Chat-Shell.css';

function ChatShell(
    {
        selectedConversation,
        conversationChanged,
        messageSubmitted,
        conversations
    }
) {
    return (
        <div className="chat-container">
            <ChatNav />
            <ChatTitle
                title={selectedConversation.username}
            />
            <ConversationList
                convs={conversations}
                onConversationItemSelected={conversationChanged}
                selectedConversationId={selectedConversation.id}
            />
            <MessageList
                messages={selectedConversation.messages}
            />
            <ChatForm onMessageSubmit={messageSubmitted} />
        </div>
    );
}
const mapStateToProps = state => {
    return {
        conversations: state.conversations,
        selectedConversation: state.selectedConversation
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        conversationChanged: conversationId => dispatch(conversationChanged(conversationId)),
        messageSubmitted: textMessage => dispatch(messageSubmitted(textMessage))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ChatShell);