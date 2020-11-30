import InitEmptyForm from '../chat-form/Init-Empty-Form';
import MessageList from '../chat-message/Message-List';
import { deleteMessage } from '../../actions/actions';
import ChatTitle from '../chat-title/Chat-Title';
import ChatForm from '../chat-form/Chat-Form';
import LoadingWindow from './Loading-Window';
import InitWindow from './Init-Window';
import { connect } from 'react-redux';
import React from 'react';
import './Main-Area.css';


const MainArea =
    ({
        isConversationsLoaded,
        selectedConversation,
        messageSubmitted,
        isFirstRender,
        deleteMessage
    }) => {
        let conversationContent;
        if (isFirstRender) {
            conversationContent = (
                <>
                    <ChatTitle
                        title={selectedConversation ? selectedConversation.username : ''}
                    />
                    <InitWindow></InitWindow>
                    <InitEmptyForm></InitEmptyForm>
                </>
            )
        } else {
            if (!isConversationsLoaded) {
                conversationContent = (
                    <>
                        <ChatTitle
                            title={selectedConversation ? selectedConversation.username : ''}
                        />
                        <LoadingWindow></LoadingWindow>
                        <InitEmptyForm></InitEmptyForm>
                    </>
                );
            } else if (isConversationsLoaded) {
                conversationContent = (

                    <>
                        <ChatTitle
                            title={selectedConversation ? selectedConversation.username : ''}
                        />
                        <MessageList
                            selectedConversation={selectedConversation}
                            handleDeleteMessage={deleteMessage}
                        />
                        <ChatForm onMessageSubmit={messageSubmitted} />
                    </>
                );
            }
        }
        return (
            <div className='main-area'>
                {conversationContent}

            </div>
        )
    }

const mapStateToProps = state => {
    return state;
}

const mapDispatchToProps = dispatch => {
    return {
        deleteMessage: (messageId, selectedConversation) => dispatch(deleteMessage(messageId, selectedConversation)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainArea);