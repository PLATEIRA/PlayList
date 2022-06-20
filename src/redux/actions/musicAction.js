import { requestMusicList, requestSearch } from "../../Service/music";

export const getMusicList = () => async (dispatch) => {
  dispatch({ type: "LOADING_MUSIC_LIST" });

  try {
    const musicList = await requestMusicList();

    dispatch({ type: "MUSIC_LIST_SUCCESS", payload: musicList });
  } catch (error) {
    dispatch({ type: "MUSIC_LIST_FAILURE" });
  }
};

export const setToMusicPlay = (music = null) => ({
  type: "SET_MUSIC_TO_PLAY",
  payload: music,
});

export const getSearchList = (search) => async (dispatch) => {
  dispatch({ type: "LOADING_SEARCH_LIST" });

  try {
    const musicList = await requestSearch(search);

    dispatch({ type: "SEARCH_LIST_SUCCESS", payload: musicList });
  } catch (error) {
    dispatch({ type: "SEARCH_LIST_FAILURE" });
  }
};

export const clearSearchList = () => ({
  type: "CLEAR_SEARCH_LIST",
});

export const handleFavorite = (musicItem) => async (dispatch, state) => {
  if (!musicItem) return;

  const { music } = state();

  let isFavorite = false;

  music.favoriteList.data.map((m) => {
    if (m.id === musicItem.id) {
      isFavorite = true;
    }
  });

  if (isFavorite) {
    const newFavoriteList = { data: [] };

    music.favoriteList.data.map((m) => {
      if (m.id !== musicItem.id) {
        newFavoriteList.data.push(m);
      }
    });

    dispatch({ type: "SET_FAVORITE_LIST", payload: newFavoriteList });
  } else {
    const newFavoriteList = { data: music.favoriteList.data };
    newFavoriteList.data.push(musicItem);
    
    dispatch({
      type: "SET_FAVORITE_LIST",
      payload: newFavoriteList,
    });
  }
};
