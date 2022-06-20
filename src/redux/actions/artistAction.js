import { requestTopArtistList } from "../../Service/music";

export const getTopArtistList = () => async (dispatch) => {
    dispatch({ type: 'LOADING_ARTIST_LIST' });

    try{
        const artistList = await requestTopArtistList();

        dispatch({ type: 'ARTIST_LIST_SUCCESS', payload: artistList });
    }catch (error) {
        dispatch({ type: 'ARTIST_LIST_FAILURE' });
    }

};