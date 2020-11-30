import { createdTime } from '../functions/functions'
import { multisplice } from '../functions/functions'

const initialState = {
    conversations: [],
    selectedConversation: {}
};

const reducer = (state = initialState, { type, payload }) => {
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
        const newMessage = {
            messageText: payload,
            createdAt: createdTime(),
            self: true
        };
        newSelectedConversation.messages.push(newMessage);
        let newStateConversations = [...state.conversations];
        const index =
            newStateConversations
                .findIndex(item =>
                    item.id === newSelectedConversation.id);
        let latestMessageTime =
            newStateConversations[0]
                .messages[state.conversations[0].messages.length - 1]
                .createdAt;

        if (latestMessageTime < newMessage.createdAt ||
            latestMessageTime === newMessage.createdAt) {
            if (index !== 0) {
                let tempConv1 = { ...newStateConversations[0] };
                let tempConv2 = { ...newStateConversations[index] };
                multisplice(newStateConversations, 0, index);
                newStateConversations.unshift(tempConv1);
                newStateConversations.unshift(tempConv2);
            }
        }
        return ({
            ...state,
            conversations: newStateConversations,
            selectedConversation: newStateConversations[0]
        })
    } else if (type === 'DELETE_MESSAGE') {
        const selectedConv = state.conversations.find(item => item.username === payload.selectedConversation.username);
        let newSelectedConv;
        if (selectedConv) {
            newSelectedConv = { ...selectedConv }
            newSelectedConv.messages.splice(payload.id, 1)
        } else {
            newSelectedConv = payload.selectedConversation
        }
        return {
            ...state,
            selectedConversation: newSelectedConv
        }
    }
    return state;
}

export default reducer;