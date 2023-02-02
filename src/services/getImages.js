import axios from "axios";

export const getAlbumImages = (track) => {
    const key = "ZTVhYTU3MWEtZjRhNy00MmRmLWJiZDAtNjQwNTAwN2E0ODhi";
    const http = axios.create({
      baseURL: "https://api.napster.com/v2.2/",
    });

    return http.get(`albums/${track.albumId}/images?apikey=${key}`);
  };