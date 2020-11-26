import { getInitData } from '../data/fetchData';
export const conversationsRequested = () => ({
    type: 'CONVERSATIONS_REQUESTED'
});
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

export const fetchInitialdata = () => {
    return (dispatch) => {
        getInitData().then(response =>
            dispatch({ type: 'CONVERSATIONS_REQUESTED', payload: response })
        )
    }
}

export const changefirstRender = () => ({
    type: 'UNDO_FIRST_RENDER'
})