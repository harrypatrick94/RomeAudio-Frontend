import React, {useState} from "react";
import ajax from '../lib/ajax'
import '../styles.css'
const SaveButton = ({sequence}) => {
  // console.log("user id: ", window.localStorage.getItem("userId"));
  const [trackName, setTrackName] = useState("Sik Trak");
  const [authorName, setAuthorName] = useState("Haz")
  const saveTrack = (e) => {
    e.preventDefault()
    console.log("Da Beat: ", sequence);
    console.log("Killa name: ", trackName);
    console.log("Author: ", authorName);

    ajax.saveSong( sequence, authorName, trackName, window.localStorage.getItem("userId"))
    .then(res => {
      console.log("ajax post successfulw: ", res);

      // this.$emit(res.data)
    })
    .catch(
      err => {
        console.warn(err);
      }
    )
  }
  const handleChangeTrak = (e) => {
    let name = e.target.value
    setTrackName(name)
    console.log(name);
  }
  const handleChangeName = (e) => {
    let name = e.target.value
    setAuthorName(name)
    console.log(name);
  }

  return(
    <div  className="saveButton">
      <form onSubmit={saveTrack}>
        <input type="text" placeholder="Trak Name" onChange={handleChangeTrak}/>
        <input type="text" placeholder="Author" onChange={handleChangeName}/>
        <input type="submit"/>
      </form>
    </div>
  )
}; // save button
export default SaveButton