import { conversationChanged, messageSubmitted, fetchInitialdata } from '../../actions/actions';
import ConversationList from '../chat-conversations/Conversation-List';
import NoConversation from '../chat-message/No-Conversation';
import MessageList from '../chat-message/Message-List';
import InitWindow from '../chat-message/Init-Window';
import ChatTitle from '../chat-title/Chat-Title';
import ChatForm from '../chat-form/Chat-Form';
import InitEmptyForm from '../chat-form/Init-Empty-Form';
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
        isFirstRender,
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
    if (isFirstRender) {
        conversationContent = (
            <>
                <NoConversation></NoConversation>
                <InitEmptyForm></InitEmptyForm>
            </>
        )
    } else {
        if (conversations.length === 0) {
            conversationContent = (
                <>
                    <InitWindow></InitWindow>
                    <InitEmptyForm></InitEmptyForm>
                </>
            );
        } else if (conversations.length > 0) {
            conversationContent = (
                <>
                    <MessageList messages={selectedConversation.messages} />
                    <ChatForm onMessageSubmit={messageSubmitted} />
                </>
            );
        }
    }
    return (
        <div className="chat-container">
            <ChatNav />
            <ChatTitle
                title={selectedConversation ? selectedConversation.username : ''}
            />
            <ConversationList
                convs={conversations}
                searchKey={searchKey}
                selectedConversation={selectedConversation}
                onConversationItemSelected={conversationChanged}
            />
            {conversationContent}
        </div>
    );
}
const mapStateToProps = state => {
    return {
        conversations: state.conversationReducer.conversations,
        selectedConversation: state.conversationReducer.selectedConversation,
        searchKey: state.applicationReducer.searchValue,
        isFirstRender: state.applicationReducer.isFirstRender,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        conversationChanged: conversationId => dispatch(conversationChanged(conversationId)),
        messageSubmitted: textMessage => dispatch(messageSubmitted(textMessage)),
        loadConversations: () => dispatch(fetchInitialdata()),
        // changefirstRender: () => dispatch(changefirstRender())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ChatShell);