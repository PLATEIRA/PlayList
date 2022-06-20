const initialState = {
  musicList: { data: [] },
  musicListLoading: false,
  music: null,

  searchList: { data: [] },
  searchListLoading: false,

  favoriteList: { data: [] },
};

export default (state = initialState, action) => {
  switch (action.type) {
    // Music List
    case "LOADING_MUSIC_LIST":
      return {
        ...state,
        musicListLoading: true,
      };
    case "MUSIC_LIST_SUCCESS":
      return {
        ...state,
        musicList: action.payload,
        musicListLoading: false,
      };
    case "MUSIC_LIST_FAILURE":
      return {
        ...state,
        musicListLoading: false,
        musicList: { data: [] },
      };

    // Music
    case "SET_MUSIC_TO_PLAY":
      return {
        ...state,
        music: action.payload,
      };

    // Search
    case "LOADING_SEARCH_LIST":
      return {
        ...state,
        searchListLoading: true,
      };
    case "SEARCH_LIST_SUCCESS":
      return {
        ...state,
        searchList: action.payload,
        searchListLoading: false,
      };
    case "SEARCH_LIST_FAILURE":
      return {
        ...state,
        searchListLoading: false,
        searchList: { data: [] },
      };
    
    case "CLEAR_SEARCH_LIST":
      return {
        ...state,
        searchList: { data: [] },
      }

    // Favorites
    case "SET_FAVORITE_LIST":
      return {
        ...state,
        favoriteList: action.payload,
      }

    default:
      return state;
  }
};
