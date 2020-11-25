
export default function reducer(state = '', { type, payload }) {
    if (type === 'SEARCH_KEYWORD') {
        state = payload;
        return state;
    }
    return state;
}