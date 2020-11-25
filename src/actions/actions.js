export const conversationChanged = conversationId => ({
    type: 'SELECTED_CONVERSATION_CHANGED',
    payload: conversationId
});

export const messageSubmitted = textMessage => ({
    type: 'MESSAGE_SUBMITTED',
    payload: textMessage
});

export const searchKeyword = keyword => ({
    type: 'SEARCH_KEYWORD',
    payload: keyword
});

export const caughtAllMessages = id => ({
    type: 'CAUGHT_ALL_MESSAGES',
    payload: id
})