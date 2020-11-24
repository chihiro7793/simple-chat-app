import ConversationList from '../chat-conversations/Conversation-List';
import { conversationChanged } from '../../actions/index'
import MessageList from '../chat-message/Message-List';
import ChatTitle from '../chat-title/Chat-Title';
import ChatForm from '../chat-form/Chat-Form';
import ChatNav from '../chat-nav/Chat-Nav';
import { connect } from 'react-redux';
import React from 'react';
import './Chat-Shell.css';

function ChatShell(
    { conversations,
        selectedConversation,
        conversationChanged }) {

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
            <ChatForm />
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
        conversationChanged: conversationId => dispatch(conversationChanged(conversationId))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ChatShell);