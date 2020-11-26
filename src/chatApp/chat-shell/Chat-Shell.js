import { conversationChanged, messageSubmitted, fetchInitialdata } from '../../actions/actions';
import ConversationList from '../chat-conversations/Conversation-List';
import MessageList from '../chat-message/Message-List';
import InitWindow from '../chat-message/Init-Window';
import ChatTitle from '../chat-title/Chat-Title';
import ChatForm from '../chat-form/Chat-Form';
import ChatNav from '../chat-nav/Chat-Nav';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './Chat-Shell.css';

function ChatShell(
    {
        selectedConversation,
        conversationChanged,
        loadConversations,
        messageSubmitted,
        conversations,
        searchKey
    }
) {

    useEffect(() => {
        if (conversations.length === 0) {
            loadConversations();
        }
    }, [conversations.length, loadConversations]);

    let conversationContent;
    if (conversations.length === 0) {
        conversationContent = (
            <>
                <InitWindow></InitWindow>
            </>
        );
    } else if (conversations.length > 0) {
        conversationContent = (
            <>
                <MessageList messages={selectedConversation.messages} />
            </>
        );
    }

    return (
        <div className="chat-container">
            <ChatNav />
            <ChatTitle
                title={selectedConversation.username}
            />
            <ConversationList
                convs={conversations}
                searchKey={searchKey}
                selectedConversationId={selectedConversation.id}
                onConversationItemSelected={conversationChanged}
            />
            {conversationContent}
            <ChatForm onMessageSubmit={messageSubmitted} />
        </div>
    );
}
const mapStateToProps = state => {
    return {
        conversations: state.conversationReducer.conversations,
        selectedConversation: state.conversationReducer.selectedConversation,
        searchKey: state.applicationReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        conversationChanged: conversationId => dispatch(conversationChanged(conversationId)),
        messageSubmitted: textMessage => dispatch(messageSubmitted(textMessage)),
        loadConversations: () => dispatch(fetchInitialdata())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ChatShell);