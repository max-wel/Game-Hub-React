import axios from "axios";

export default axios.create({
    baseURL: 'http://localhost:8080/https://api.igdb.com/v4',
    headers: {
       "Client-ID": "ha5m9bejgfhnlvrutl568yzcrd7zip",
       "Authorization": "Bearer 2vykpoimxi1huoso6d3mu0yssel3v2",
       "Content-Type": "text/plain"
    }
})