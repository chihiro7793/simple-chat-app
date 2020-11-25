export const conversationChanged = conversationId => ({
    type: 'SELECTED_CONVERSATION_CHANGED',
    payload: conversationId
});

export const messageSubmitted = textMessage => ({
    type: 'MESSAGE_SUBMITTED',
    payload: textMessage
});