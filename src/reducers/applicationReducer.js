
const reducer =
    (
        state = { user: null, searchValue: '', isFirstRender: false, toggleConversations: false }
        ,
        { type, payload }) => {
        if (type === 'SET_USER') {
            return {
                ...state,
                user: payload
            }

        } else if (type === 'SEARCH_KEYWORD') {
            return {
                ...state,
                searchValue: payload
            }
        } else if (type === 'CONVERSATIONS_REQUESTED') {
            return {
                ...state,
                isFirstRender: true
            }
        } else if (type === 'SELECTED_CONVERSATION_CHANGED') {
            return {
                ...state,
                isFirstRender: false
            }
        } else if (type === 'TOGGLE_CONVERSATION_MENU') {
            return {
                ...state,
                toggleConversations: !state.toggleConversations
            }
        }
        return state;
    }

export default reducer;