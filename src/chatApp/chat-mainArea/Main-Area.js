import React from 'react';
import './Main-Area.css';
import InitWindow from './Init-Window';
import LoadingWindow from './Loading-Window';
import MessageList from '../chat-message/Message-List';
import ChatForm from '../chat-form/Chat-Form';
import ChatTitle from '../chat-title/Chat-Title';
import InitEmptyForm from '../chat-form/Init-Empty-Form';

export default function MainArea({ isConversationsLoaded, isFirstRender, selectedConversation, messageSubmitted }) {

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
                    <MessageList messages={selectedConversation.messages} />
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
