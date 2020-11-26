
export default function reducer(state = { searchValue: '', isFirstRender: false }, { type, payload }) {
    if (type === 'SEARCH_KEYWORD') {
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
    }
    return state;
}