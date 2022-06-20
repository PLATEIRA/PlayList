import Api from "./Api";

export const requestMusicList = () => (
    new Promise((resolve, reject) => {
        Api.get('/chart/0/tracks')
        .then((r) => resolve(r.data))
        .catch((e) => reject(e));
    })
);

export const requestTopArtistList = () => (
    new Promise((resolve, reject) => {
        Api.get('/chart/0/artists')
        .then((r) => resolve(r.data))
        .catch((e) => reject(e));
    })
);

export const requestSearch = (query) => (
    new Promise((resolve, reject) => {
        Api.get(`https://api.deezer.com/search?q=${query}`)
        .then((r) => resolve(r.data))
        .catch((e) => reject(e));
    })
);