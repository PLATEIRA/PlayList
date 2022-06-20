import axios from "axios";

const Api = axios.create({
    // baseURL: "https://cors-anywhere.herokuapp.com/http://api.deezer.com"
    baseURL: "http://api.deezer.com"
})

export default Api;
