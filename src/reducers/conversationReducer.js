import { createdTime } from '../data/fetchData'
const initialState = {
    conversations: [],
    selectedConversation: {}
};

export default function reducer(state = initialState, { type, payload }) {
    if (type === 'CONVERSATIONS_REQUESTED') {
        return {
            ...state,
            conversations: payload.conversations,
            selectedConversation: payload.selectedConversation
        }
    } else if (type === 'SELECTED_CONVERSATION_CHANGED') {
        const copyConversations = [...state.conversations];
        const selectedItem = copyConversations.find(c => c.id === payload);
        selectedItem.unread = 0;
        return ({
            ...state,
            conversations: copyConversations,
            selectedConversation: selectedItem
        })

    } else if (type === 'MESSAGE_SUBMITTED') {
        const newSelectedConversation = { ...state.selectedConversation }
        newSelectedConversation.messages.push({
            messageText: payload,
            createdAt: createdTime(),
            self: true
        });
        return ({
            ...state,
            selectedConversation: newSelectedConversation
        })
    }
    return state;
}