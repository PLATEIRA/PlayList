const initialState = {
    artistList: { data: []},
    artistListLoading: false,
};

export default (state =  initialState, action) => {
    switch (action.type){
        case "LOADING_ARTIST_LIST":
            return {
                ...state,
                artistListLoading: true,
            };
        case "ARTIST_LIST_SUCCESS":
            return {
                ...state,
                artistList: action.payload,
                artistListLoading: false,           
            };
        case "ARTIST_LIST_SUCCESS":
            return {
                ...state,
                artistList: { data: [] },
                artistListLoading: false, 
            };
        default: return state;
    }
};