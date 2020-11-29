import SideMenu from '../chat-sideMenu/Side-Menu';
import MainArea from '../chat-mainArea/Main-Area';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './Chat-Shell.css';
import {
    conversationChanged,
    messageSubmitted,
    fetchInitialdata,
    toggleConversationMenu
}
    from '../../actions/actions';

function ChatShell(
    {
        toggleConversationMenu,
        selectedConversation,
        conversationChanged,
        loadConversations,
        toggleConversations,
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

    return (
        <div className="chat-container">
            <SideMenu
                handleConversationMenu={() => toggleConversationMenu()}
                onConversationItemSelected={conversationChanged}
                selectedConversation={selectedConversation}
                toggleConversations={toggleConversations}
                convs={conversations}
                searchKey={searchKey}
            />

            <MainArea
                isConversationsLoaded={conversations.length}
                selectedConversation={selectedConversation}
                messageSubmitted={messageSubmitted}
                isFirstRender={isFirstRender}
            />


        </div>
    );
}
const mapStateToProps = state => {
    return {
        conversations: state.conversationReducer.conversations,
        selectedConversation: state.conversationReducer.selectedConversation,
        searchKey: state.applicationReducer.searchValue,
        isFirstRender: state.applicationReducer.isFirstRender,
        toggleConversations: state.applicationReducer.toggleConversations
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        conversationChanged: conversationId => dispatch(conversationChanged(conversationId)),
        messageSubmitted: textMessage => dispatch(messageSubmitted(textMessage)),
        loadConversations: () => dispatch(fetchInitialdata()),
        toggleConversationMenu: () => dispatch(toggleConversationMenu())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ChatShell);