import {useState} from "react";
import { Link } from 'react-router-dom';


function Cover({value}){

 // console.log(value);

   return(
      <article key={value.id}>
        <div >
          <img className="imgCover" src={value.cover}/>
        </div>
        <div>
             <h4 className="alName">{value.albumName}</h4>
          <Link to={{pathname:"/album/"+value.id}}>{value.albumName}</Link>
        </div>
        <div>
          <p className="arname">{value.artistName}</p>
          <Link to={{pathname:"/artistes/"+value.artistId}}>{value.artistName}</Link>
        </div>
      </article>
    )

}
export default Cover;
