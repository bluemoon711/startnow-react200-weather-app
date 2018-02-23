const defaultState = {
    input: '',
    city: null,
    listItems: [],
    err: null
};

export default function SearchReducer(state = defaultState, action) {
    const { type, payload } = action;
    switch (type) {
        case 'UPDATE_SEARCH_INPUT': {
            return Object.assign({}, state, { input: payload.input });
        }
        
        case 'GET_WEATHER_PENDING':  
            return state;

        case 'GET_WEATHER_FULFILLED': {
            var listItem = {
                name: action.payload.data.name,
                time: new Date().toISOString()
            }

            var newListItems = [...state.listItems];
            newListItems.push(listItem);
            
            return {
                ...state,
                city: action.payload.data,
                listItems: newListItems
            }
        }
        

        case 'GET_WEATHER_REJECTED':
            return state;
      
        default:
            return state;
        }
}