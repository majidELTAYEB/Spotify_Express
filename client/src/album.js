import React, {useEffect, useState} from "react";
import {link, useParams} from 'react-router-dom';
import Axios from "axios";
import Headalbum from "./Headalbum";
import './HeadAlbum.css';
import NavBar from "./NavBar";

const Album = ()=> {
  let [musicAlbums, setmusicAlbums] = useState([])
  let Cover
  let description
  let nameAR
  let nameAL
  let dateSortie
  let totalminutes
  let majid
  let total = 0;
  useEffect(() => {
    getAlbums();
  }, []);

  const { id } = useParams();

  const getAlbums = async () => {
    const response = await Axios.get('http://localhost:3001/albums/'+id);
    setmusicAlbums(response.data);
  };
  musicAlbums.map((value)=>{
    Cover = value.cover;
    description = value.albumDescription
    nameAR = value.artistName
    nameAL = value.albumName
    dateSortie = new Date(value.release_date);
    dateSortie = dateSortie.getFullYear()
  })

  let nombreMusic = musicAlbums.length
let hehe = {Cover,description,nameAR,nameAL, nombreMusic, dateSortie,musicAlbums}
  //console.log(Cover)

  return(<div className="albumID">
    <NavBar />
  <Headalbum Cover={hehe} />

  </div>)
}
export default Album;
