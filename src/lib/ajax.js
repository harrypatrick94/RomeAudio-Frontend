import axios from 'axios';

// Define the API domain and paths we need for our requests
// The paths depend on what is defined in the Rails routes.rb file
const BASE_URL = 'https://rome-audio-backend.herokuapp.com';
// const BASE_URL = 'http://localhost:1337'
export default {
  saveSong(song, authorName, trackName, userId){
    const url = `${BASE_URL}/user`;
    console.log("Savinggggg");
    return axios.post(url, {
      song, authorName, trackName, userId
    });
  },
  registerUser(userName, email, password){
    const url = `${BASE_URL}/register`
    return axios.post(url, {
      userName, email, password
    })
  },
  signIn(email, password){
    const url = `${BASE_URL}/signin`
    return axios.post(url, {

      email, password
    })
  },
  // need to give token here
  getUser(){
    const url = `${BASE_URL}/user`
    return axios.get(url)
  },
  findSongs(userId){
    return axios.get(`${BASE_URL}/songs`, userId)
  }
  // findSong(track){
  //   return axios.get(`${BASE_URL}/drum-machine/${track}`)
  // }
} // export
